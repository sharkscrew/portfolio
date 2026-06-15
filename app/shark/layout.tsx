import PersonNav from "../components/PersonNav";

export default function Person1Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PersonNav person="1" />
            <main>{children}</main>
        </>
    );
}