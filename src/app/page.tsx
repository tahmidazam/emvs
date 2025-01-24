import Article from "@/components/article";

export default function Home() {
  return (
    <Article title={"Welcome to Emmanuel MedVet Society"}>
      <p className="leading-7 mt-6">
        Emmanuel MedVet Society (EMVS) is a well-established community
        connecting past and present medics and vets at Emmanuel College. With
        Emmanuel’s strong history of MedVet admissions, the society has
        developed into a broad network that offers both support and career
        insights through events like formal dinners, networking opportunities,
        and lectures.
      </p>

      <p className="leading-7 mt-6">
        This year, we’re focusing on expanding our Medicine and Beyond lecture
        series, which introduces students to the variety within medical and
        veterinary careers. With speakers from areas as diverse as military
        medicine and Antarctic research, the series showcases the wide range of
        interests available to students, offering insights that go ‘beyond’
        traditional understanding of what a career in medicine can be. By
        blending Cambridge’s esteemed academic traditions with the exciting
        future of medical research, EMVS aims to provide Emmanuel students with
        a rounded understanding of their professional options within and beyond
        the usual pathways.
      </p>

      <div className="mt-12 text-right">
        <p className="font-medium">Nina Weston</p>
        <p className="text-sm text-muted-foreground">Co-President</p>
      </div>
    </Article>
  );
}
