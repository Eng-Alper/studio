import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InventoryList } from "./InventoryList";

// Mock data for testing
const mockItems = [
  { id: "1", name: "Test Item 1", description: "Description 1", stock: 10 },
  { id: "2", name: "Test Item 2", description: "Description 2", stock: 5 },
];

describe("InventoryList Component", () => {
  test("renders inventory items correctly", () => {
    const mockUpdateStock = jest.fn();
    
    render(<InventoryList items={mockItems} onUpdateStock={mockUpdateStock} />);
    
    // Check if item names are displayed
    expect(screen.getByText("Test Item 1")).toBeInTheDocument();
    expect(screen.getByText("Test Item 2")).toBeInTheDocument();
    
    // Check if descriptions are displayed
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  test("updates stock quantity when input changes", () => {
    const mockUpdateStock = jest.fn();
    
    render(<InventoryList items={mockItems} onUpdateStock={mockUpdateStock} />);
    
    // Find the stock input for the first item
    const stockInputs = screen.getAllByRole("spinbutton");
    fireEvent.change(stockInputs[0], { target: { value: "15" } });
    
    // Verify that the onUpdateStock callback was called with correct parameters
    expect(mockUpdateStock).toHaveBeenCalledWith("1", 15);
  });

  test("renders action buttons for each item", () => {
    const mockUpdateStock = jest.fn();
    
    render(<InventoryList items={mockItems} onUpdateStock={mockUpdateStock} />);
    
    // Check if Restock and Remove buttons exist
    const restockButtons = screen.getAllByText("Restock");
    const removeButtons = screen.getAllByText("Remove");
    
    expect(restockButtons).toHaveLength(2);
    expect(removeButtons).toHaveLength(2);
  });
});
