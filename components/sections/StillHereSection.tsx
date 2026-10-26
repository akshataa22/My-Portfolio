import { BonusBlock } from "@/components/bonus/BonusBlock";
import { BucketListBoard } from "@/components/bonus/BucketListBoard";
import { CoffeeCounter } from "@/components/bonus/CoffeeCounter";
import { FunFactShuffler } from "@/components/bonus/FunFactShuffler";
import { NowPlayingCard } from "@/components/bonus/NowPlayingCard";
import { TerminalLoader } from "@/components/bonus/TerminalLoader";
import { TravelMap } from "@/components/bonus/TravelMap";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bucketList, funFacts, nowPlaying, places } from "@/data/bonus";

export function StillHereSection() {
  return (
    <SectionContainer id="still-here" labelledBy="still-here-heading">
      <SectionHeading
        id="still-here-heading"
        eyebrow="bonus content unlocked"
        title="Still here? 👀"
        description="Might as well browse some bonus content. Fair warning: everything below is interactive."
      />

      <div className="flex flex-col gap-6">
        <RevealOnScroll className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr]">
          <BonusBlock title="Now playing" note="here's a song while you read">
            <NowPlayingCard track={nowPlaying} />
          </BonusBlock>
          <BonusBlock title="akshata-os" note="type `help` →">
            <TerminalLoader />
          </BonusBlock>
        </RevealOnScroll>

        <RevealOnScroll>
          <BonusBlock title="Places I've been" note="hover or tap a pin">
            <TravelMap places={places} />
          </BonusBlock>
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <BonusBlock title="Bucket list 🪣" note="drag & play around">
            <BucketListBoard items={bucketList} />
          </BonusBlock>
          <div className="grid gap-6">
            <BonusBlock title="Random fun fact">
              <FunFactShuffler facts={funFacts} />
            </BonusBlock>
            <BonusBlock title="Coffee counter" note="keep the coffee flowing">
              <CoffeeCounter />
            </BonusBlock>
          </div>
        </RevealOnScroll>
      </div>
    </SectionContainer>
  );
}
