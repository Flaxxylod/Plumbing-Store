import { describe, it, expect, vi, test, afterEach, beforeEach } from "vitest";
import { getByTestId, render, screen } from "@testing-library/react";
import CardProduct from "./../../CommonElements/CardProduct/CardProduct"
import userEvent from "@testing-library/user-event";
import axios from "axios";


vi.mock("axios", () => ({
    default: {
        get: vi.fn(),
    }
}))

vi.mock("../../Shifters-Catalog/ShiftersFilter/ShiftersFilter", () => ({
    default: () => <div data-testid="shifters-filter-mock">Filter Mock</div>
}))

vi.mock("../../CommonElements/PromotionalCard/PromotionalCard", () => ({
    default: ({ title, price, discountPrice, discount, picture, onClick, testid }) => (
        <div data-testid={testid || "PromotionalCard"} onClick={onClick}>
            {title} - {price} - {discount} - {discountPrice} - {picture}
        </div>
    )
}))



import ShifterCatalogProducts from "./ShifterCatalog";
import PromotionalCard from "../../CommonElements/PromotionalCard/PromotionalCard";

beforeEach(() => {
    // Создаем root для портала
    const modalRoot = document.getElementById("modal__window");
    if (!modalRoot) {
        const newModalRoot = document.createElement("div");
        newModalRoot.setAttribute("id", "modal__window");
        document.body.appendChild(newModalRoot);
    }
})

afterEach(() => {
    vi.clearAllMocks();
})

describe("Проверка состовляюших ShifterCatalogProducts: ", () => {
    const user = userEvent.setup()

    test("Проверка на отображение:", () => {
        render(<ShifterCatalogProducts />)
        expect(screen.getByTestId('shifters-filter-mock')).toBeInTheDocument();
    })

    test("Проверка CardProduct: ", () => {
        const products = {
            price: "2500",
            title: "смеситель",
            imageUrl: "http://test.com/image.jpg",
            discount_price: "2250",
            discount_percents: "10"
        }
        render(<CardProduct product={products} onClose={() => { }} />)
        expect(screen.getByText(/2500/)).toBeInTheDocument();
        expect(screen.getByText(/смеситель/)).toBeInTheDocument();
        expect(screen.getByText(/2250/)).toBeInTheDocument();
        expect(products.discount_percents).not.toBeNull();
    })

    test("Проверка PromotionalCard", () => {
        render(<PromotionalCard
            title={"Заголовок"}
            price={"5000"}
            discountPrice={"4500"}
            discount={"10%"}
            picture={"http://test.com/image.jpg"}
        />)

        expect(screen.getByTestId("PromotionalCard")).toBeInTheDocument();
        expect(screen.getByTestId("PromotionalCard")).toHaveTextContent("Заголовок")
        expect(screen.getByTestId("PromotionalCard")).toHaveTextContent("5000")
        expect(screen.getByTestId("PromotionalCard")).toHaveTextContent("4500")
        expect(screen.getByTestId("PromotionalCard")).toHaveTextContent(/http:\/\/test\.com\//)
    })

    test("Проверка Modal", async () => {
        const user = userEvent.setup()


        const mockProducts = [
            {
                id: 1,
                title: "Тестовый товар",
                price: "5000",
                discount_price: "4500",
                discount_percents: "10",
                image_name: "test.jpg"
            }
        ]


        axios.get.mockResolvedValue({ data: mockProducts })



        render(<ShifterCatalogProducts />)


        const card = await screen.findByTestId("PromotionalCard")
        expect(card).toBeInTheDocument()

        await user.click(card)

        const modal = await screen.findByTestId("Modal")
        expect(modal).toBeInTheDocument()

    })
})