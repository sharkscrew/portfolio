import PersonNav from "../components/PersonNav";

export default function Person2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PersonNav person="2" />
      <main>{children}</main>
    </>
  );
}