import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"
import appStore from "../../utils/appStore"


it("should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    //Assert
    const loginButton = screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument();
})

it("Should change login button to logout button on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    //Assert

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
})