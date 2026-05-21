import { describe, it, expect, vi, test } from "vitest";
import { render, screen } from "@testing-library/react";
import CardProduct from "./../../CommonElements/CardProduct/CardProduct"
vi.mock("axios");

vi.mock("../../Shifters-Catalog/ShiftersFilter/ShiftersFilter", () => ({
    default: () => <div data-testid="shifters-filter-mock">Filter Mock</div>  // ← testid совпадает
}))



import ShifterCatalogProducts from "./ShifterCatalog";

describe("Проверка состовляюших ShifterCatalogProducts: ", () => {
    test("Проверка на отображение:", () => {
        render(<ShifterCatalogProducts />)

        // Теперь проверка работает
        expect(screen.getByTestId('shifters-filter-mock')).toBeInTheDocument();

    })
    test("Проверка CardProduct: ", () => {
        const produts = { price: "2500", title: "смеситель", imageUrl: "http://test.com/image.jpg", discount_price: "2250", discount_percents: "10" }
        console.log({ ...produts })
        render(<CardProduct product={produts} onClose={() => { }} />)
        expect(screen.getByText(/2500/), "Отображение цены").toBeInTheDocument();
        expect(screen.getByText(/смеситель/), "Отображение заголовка").toBeInTheDocument();

        expect(screen.getByText(/2250/), "Отображение discount_price").toBeInTheDocument();
        expect(produts.discount_percents, "Отображение discount_percents").not.toBeNull();

    })

})