import Image from "next/image";

export default function Loading() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Image
          src="/Rolling-1s-200px.svg"
          alt="Loading"
          width={200}
          height={200}
          // style={{ margin: "auto" }}
        />
      </div>
    </>
  );
}
