/// <reference types="cypress" />

import Login from "../PageObjectModel/Login";

describe("My First Test", () => {
    it("nopcommerce ", () => {
        const Log = new Login();
        Log.visit("https://admin-demo.nopcommerce.com/");
        Log.Enteremail("admin@yourstore.com");
        Log.Enterpassword("admin");
        Log.Enterpassword("admin");
        Log.submit();
    });
    //second test concatSeries
    it("nopcommerce ", () => {
        const Log = new Login();
        Log.visit("https://admin-demo.nopcommerce.com/");
        Log.Enteremail("admin@yourstore.com");
        Log.Enterpassword("admin");
        Log.Enterpassword("admin");
        Log.submit();
    });
});