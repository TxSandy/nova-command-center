import { useEffect, useState } from "react";

interface Beam {
  id: number;
  left: number;
  delay: number;
  duration: number;
  height: number;
}

const BeamBackground = () => {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    const generateBeams = () => {
      const newBeams: Beam[] = [];
      for (let i = 0; i < 15; i++) {
        newBeams.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4,
          height: 80 + Math.random() * 120,
        });
      }
      setBeams(newBeams);
    };
    generateBeams();
  }, []);

  return (
    <div className="beam-container">
      {beams.map((beam) => (
        <div
          key={beam.id}
          className="beam"
          style={{
            left: `${beam.left}%`,
            animationDelay: `${beam.delay}s`,
            animationDuration: `${beam.duration}s`,
            height: `${beam.height}px`,
          }}
        />
      ))}
    </div>
  );
};

export default BeamBackground;
