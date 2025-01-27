import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/shared/components/header/Header";
import { Title } from "@/shared/components/title/Title";

export const metadata: Metadata = {
    title: "Slider",
    description: "test task slider",
};

export default function Home() {
    return (
        <html lang="en">
            <body>
                <h1>Home page</h1>
            </body>
        </html>
    );
}
