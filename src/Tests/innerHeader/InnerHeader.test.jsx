import { vi, test, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InnerHeader from "./../../Landing/inner-header/InnerHeader";
import { AppContext } from "../../Context";
import { BrowserRouter, useLocation } from "react-router-dom";
import userEvent from "@testing-library/user-event";

vi.mock("../../Landing/inner-header/SearchInput/SearchInput", () => ({
    default: ({ isActive }) => (
        <div data-testid="SearchInput-mock">{isActive ? "Отображается" : "Скрыт"}</div>
    )
}
))

vi.mock("../../Landing/inner-header/catalogProducts/CatalogProducts", () => ({
    default: ({ isActive }) => (
        <div data-testid="CatalogProducts-mock">{isActive ? "Отображается" : "Скрыт"}</div>
    )
}))

vi.mock("../../Styles/elements/MenuButton/MenuBar", () => ({
    default: ({ isActive }) => (
        <div data-testid="MenuBar-mock">{isActive ? "Отображается" : "Скрыт"}</div>
    )
}))
const mockContextValue = {
    Directory: [{ name: "Главная", path: "/" }]
};


describe("Проверка компонента InnerHeader", () => {
    test("Оторбажение компонента", () => {


        render(<BrowserRouter>
            <AppContext.Provider value={mockContextValue}>
                <InnerHeader />
            </AppContext.Provider>
        </BrowserRouter>)
    })


})

describe("Проверка функциональности компонента", () => {
    test("проверка начального состояния стейтов условного рендеринга: ", () => {

        render(<BrowserRouter>
            <AppContext.Provider value={mockContextValue}>
                <InnerHeader />
            </AppContext.Provider>
        </BrowserRouter>)
        expect(screen.queryByTestId("SearchInput-mock")).toHaveTextContent("Скрыт")
        expect(screen.queryByTestId("CatalogProducts-mock")).toHaveTextContent("Скрыт")
        expect(screen.queryByTestId("MenuBar-mock")).toHaveTextContent("Скрыт")
    })

    test("Проверка смены состояния стейтов условного рендеринга: ", async () => {
        const user = userEvent.setup()

        render(<BrowserRouter >
            <AppContext.Provider value={mockContextValue}>
                <InnerHeader />
            </AppContext.Provider>
        </BrowserRouter>)
        await user.click(screen.getAllByRole("button")[3])
        expect(screen.getByTestId("SearchInput-mock")).toHaveTextContent("Отображается")

        await user.click(screen.getByText(/Меню/).closest("button"))
        expect(screen.getByTestId("MenuBar-mock")).toHaveTextContent("Отображается")

        await user.click(screen.getByRole('button', { name: 'Каталог товаров' }))
        expect(screen.getByTestId("CatalogProducts-mock")).toHaveTextContent("Отображается")


    })
})