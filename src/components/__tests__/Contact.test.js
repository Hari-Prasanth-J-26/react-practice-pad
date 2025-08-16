import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
import { beforeEach } from "node:test";


describe("Contact Us page test cases", () => {

    beforeAll(() => {
        console.log("Before All");
    })

    beforeEach(() => {
        console.log("Before Each");
    })

    it("Should load contact page component", () => {
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});

    test("Should check button is inside the contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
});
});

