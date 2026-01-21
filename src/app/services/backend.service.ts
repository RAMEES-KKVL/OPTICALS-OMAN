import { Injectable } from "@angular/core";
import { environments } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class BackendService {
    private baseUrl = environments.apiUrl + '/api'
    brand_1 = environments.brand_1    

    constructor(private http: HttpClient) {}

    getOutlets() {
        return this.http.get<any>(`${this.baseUrl}/user/outlets`);
    }

    contactFormSubmission(formData: { fullName: String, email: String, phone: String, message: String}) {
        return this.http.post(`${this.baseUrl}/user/contact`, formData)
    }

    getCategory(id: string) {
        return this.http.get(`${this.baseUrl}/user/category/${id}`)
    }

    getProductsByCategory(categoryId: string) {
        return this.http.get(`${this.baseUrl}/user/products/${this.brand_1}/${categoryId}`)
    }

    getFeaturedProducts(unisex: string, men: string, women: string, limit?: number) {
        return this.http.get(`${this.baseUrl}/user/featured-products/${this.brand_1}?UNISEX=${unisex}&MEN=${men}&WOMEN=${women}&limit=${limit}`)
    }

    getProductBySlug(slug: string) {
        return this.http.get<any>(`${this.baseUrl}/user/product/${slug}`);
    }

    getRelatedProducts(slug: string) {
        return this.http.get<any>(`${this.baseUrl}/user/product/related/${slug}`);
    }

    subscribeNewsletter(email: string) {
        return this.http.post(`${this.baseUrl}/user/subscribe`, { email });
    }
}