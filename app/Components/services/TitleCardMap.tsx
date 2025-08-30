import Image from "next/image";
import CardSwap, { Card } from "./TitleCard";

import React from "react";

const TitleCardMap = () => {
  return (
    <div className="flex overflow-hidden pt-10 justify-center items-center max-w-350 mx-auto rounded-xl">
      <div className="text-5xl text-center px-10">
        Broadcasts That Speak for Themselves
      </div>
      <div>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <div className="relative w-full h-full ">
              <Image
                src="/titlecards/card1.png"
                alt="Corporate Summit"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-bold">
                  Corporate Summit Virtual Production
                </h3>
                <p>
                  Transforming keynote presentations with virtual sets, XR
                  environments, and broadcast-quality delivery.
                </p>
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-lg z-0" />
              {/* dark overlay for readability */}
            </div>
          </Card>
          <Card>
            <div className="relative w-full h-full">
              <Image
                src="/titlecards/card2.png"
                alt="Global Music Festival"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg z-0" />
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-bold">
                  Global Music Festival Live Stream
                </h3>
                <p>
                  Multi-platform streaming with immersive AR/VR visuals,
                  reaching audiences worldwide.
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="relative w-full h-full">
              <Image
                src="/titlecards/card3.png"
                alt="Election Night Coverage"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg z-0" />
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-bold">Election Night Coverage</h3>
                <p>
                  Seamless live data integration and on-air graphics for
                  nationwide election reporting.
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="relative w-full h-full">
              <Image
                src="/titlecards/card4.png"
                alt="Sports League Broadcast"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg z-0" />
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-bold">
                  National Sports League Broadcast
                </h3>
                <p>
                  Delivering real-time sports graphics and flawless live
                  coverage for millions of viewers.
                </p>
              </div>
            </div>
          </Card>
        </CardSwap>
      </div>
    </div>
  );
};

export default TitleCardMap;
