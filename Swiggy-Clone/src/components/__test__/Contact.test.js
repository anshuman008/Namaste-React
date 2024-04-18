import { render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../../pages/Contact";

describe("contact page test cases",()=>{

    it("Contact page Shold Render form",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    
    test("Contact page Shold Render Button",()=>{
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    
    it("Contact page Shold Render Button",()=>{
        render(<Contact/>);
    
        const input = screen.getByPlaceholderText('message');
    
        expect(input).toBeInTheDocument();
    });
    
    
    test("Contact should render 2 inputs",()=>{
        render(<Contact/>);
    
        const inputs = screen.getAllByRole('textbox');
    
        expect(inputs.length).toBe(2);
    })
})
