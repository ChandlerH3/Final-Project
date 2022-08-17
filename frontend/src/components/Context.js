import { useState, useEffect, createContext } from "react";

export const Context = createContext(null);
export const Provider = ({ children }) => {
    
    return (
        <Context.Provider
        value={{
            
        }}
        >
        {children}
        </Context.Provider>
    );
    };