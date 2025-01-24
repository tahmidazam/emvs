import Article from "@/components/article";
import Link from "next/link";

export default function Sponsors() {
  return (
    <Article title="Sponsoring Emmanuel MedVet Society">
      <p className="leading-7 mt-6">
        Emma MedVetSoc is always looking to broaden our impact through contacts
        beyond the University of Cambridge’s walls. With our contacts within the
        wider academic community here, we have access to almost 2000
        enthusiastic MedVet students, many of whom would love to get involved in
        any opportunity you have to offer. We also have access to the facilities
        of Emmanuel College in particular, such as our numerous lecture halls,
        and a number of distinguished Fellows. If you are interested in
        sponsoring or leading an event with us, please reach out to{" "}
        <Link
          href="mailto:emmamedvetsoc@societies.cam.ac.uk"
          className="font-medium text-primary underline underline-offset-4"
        >
          emmamedvetsoc@societies.cam.ac.uk
        </Link>
        !
      </p>

      <div className="mt-12 text-right">
        <p className="font-medium">Nina Weston</p>
        <p className="text-sm text-muted-foreground">Co-President</p>
      </div>
    </Article>
  );
}
