import { dangerHTML, type RequestContext } from "brisa";
import { Ico } from "@/components/ico";

export async function Head({}, { route }: RequestContext) {
  return (
    <>
      <title>{route.name}</title>
      <link
        rel="ico"
        href={encodeURIComponent(`data:image/svg+xml;utf8,${await Ico()}`)}
      />
    </>
  );
}

export default function Homepage() {
  return <div></div>;
}
