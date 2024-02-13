import dynamic, { type DynamicOptionsLoadingProps } from "next/dynamic";

const Check = dynamic(
  () => {
    return import("../components/check");
  },
  {
    loading: LoadingIndicator,
    ssr: false
  }
);

export default function HomePage() {
  return (
    <main className="p-12">
      <h1>Test</h1>
      <Check />
    </main>
  );
}

function LoadingIndicator(props: DynamicOptionsLoadingProps) {
  console.log(JSON.stringify(props))
  if (!props.pastDelay) return null
  return <p>LOADING!</p>;
}
