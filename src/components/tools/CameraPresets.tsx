"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrompt, CAMERA_PRESETS } from "@/lib/PromptContext";
import { Camera, Aperture, Scan } from "lucide-react";

const cameraInfo: Record<string, { dof: string; use: string }> = {
  "14mm": { dof: "Deep DOF, everything in focus", use: "Ultra-wide landscapes, architecture" },
  "24mm": { dof: "Deep DOF, slight distortion", use: "Environmental portraits, street" },
  "35mm": { dof: "Moderate DOF", use: "Documentary, street photography" },
  "50mm": { dof: "Natural perspective, moderate DOF", use: "Classic portraits, everyday scenes" },
  "85mm": { dof: "Shallow DOF, beautiful bokeh", use: "Portraits, headshots" },
  "135mm": { dof: "Very shallow DOF, compression", use: "Tight portraits, sports" },
  "200mm": { dof: "Extreme compression, shallow DOF", use: "Wildlife, sports, distant subjects" }
};

const apertureInfo: Record<string, { light: string; dof: string }> = {
  "f/1.2": { light: "Very bright", dof: "Paper-thin focus plane" },
  "f/1.8": { light: "Bright", dof: "Shallow, creamy bokeh" },
  "f/2.8": { light: "Moderate", dof: "Shallow DOF" },
  "f/5.6": { light: "Medium", dof: "Moderate DOF" },
  "f/11": { light: "Dark", dof: "Deep DOF, sharp throughout" }
};

const sensorInfo: Record<string, { desc: string; camera: string }> = {
  "Full Frame": { desc: "35mm equivalent, natural look", camera: "ARRI ALEXA, Sony A7" },
  "APS-C": { desc: "1.5x crop factor", camera: "Sony A6000, Fuji X" },
  "Medium Format": { desc: "Larger sensor, more detail", camera: "Hasselblad, Phase One" }
};

export default function CameraPresets() {
  const { state, updateCameraSetup } = usePrompt();
  const containerRef = useRef<HTMLDivElement>(null);
  const [focalLength, setFocalLength] = useState(state.cameraSetup.focalLength);
  const [aperture, setAperture] = useState(state.cameraSetup.aperture);
  const [sensor, setSensor] = useState(state.cameraSetup.sensor);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    updateCameraSetup({ focalLength, aperture, sensor });
  }, [focalLength, aperture, sensor, updateCameraSetup]);

  const info = cameraInfo[focalLength] || { dof: "", use: "" };
  const aptInfo = apertureInfo[aperture] || { light: "", dof: "" };
  const senInfo = sensorInfo[sensor] || { desc: "", camera: "" };

  return (
    <div ref={containerRef} className="brutal-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-sm uppercase tracking-wider text-brutal-black">
          Camera Presets
        </h3>
        <div className="w-10 h-10 bg-brutal-yellow border-2 border-brutal-black flex items-center justify-center">
          <Camera className="w-5 h-5 text-brutal-black" />
        </div>
      </div>

      {/* Focal Length */}
      <div className="mb-4">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brutal-gray mb-2">
          <Camera className="w-3 h-3" />
          Focal Length
        </label>
        <div className="flex flex-wrap gap-1">
          {CAMERA_PRESETS.focalLengths.map((fl) => (
            <button
              key={fl}
              onClick={() => setFocalLength(fl)}
              className={`px-3 py-2 text-xs font-bold border-2 transition-all ${
                focalLength === fl
                  ? "bg-brutal-yellow border-brutal-black text-brutal-black"
                  : "bg-brutal-cream border-brutal-gray/30 text-brutal-gray hover:border-brutal-black"
              }`}
            >
              {fl}
            </button>
          ))}
        </div>
        {info && (
          <div className="mt-2 p-2 bg-brutal-gray/10 text-xs">
            <p><strong>DOF:</strong> {info.dof}</p>
            <p><strong>Best for:</strong> {info.use}</p>
          </div>
        )}
      </div>

      {/* Aperture */}
      <div className="mb-4">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brutal-gray mb-2">
          <Aperture className="w-3 h-3" />
          Aperture
        </label>
        <div className="flex flex-wrap gap-1">
          {CAMERA_PRESETS.apertures.map((ap) => (
            <button
              key={ap}
              onClick={() => setAperture(ap)}
              className={`px-3 py-2 text-xs font-bold border-2 transition-all ${
                aperture === ap
                  ? "bg-brutal-cyan border-brutal-black text-brutal-black"
                  : "bg-brutal-cream border-brutal-gray/30 text-brutal-gray hover:border-brutal-black"
              }`}
            >
              {ap}
            </button>
          ))}
        </div>
        {aptInfo && (
          <div className="mt-2 p-2 bg-brutal-gray/10 text-xs">
            <p><strong>Light:</strong> {aptInfo.light}</p>
            <p><strong>DOF:</strong> {aptInfo.dof}</p>
          </div>
        )}
      </div>

      {/* Sensor */}
      <div className="mb-4">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brutal-gray mb-2">
          <Scan className="w-3 h-3" />
          Sensor Size
        </label>
        <div className="flex flex-wrap gap-1">
          {CAMERA_PRESETS.sensors.map((s) => (
            <button
              key={s}
              onClick={() => setSensor(s)}
              className={`px-3 py-2 text-xs font-bold border-2 transition-all ${
                sensor === s
                  ? "bg-brutal-red border-brutal-black text-white"
                  : "bg-brutal-cream border-brutal-gray/30 text-brutal-gray hover:border-brutal-black"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        {senInfo && (
          <div className="mt-2 p-2 bg-brutal-gray/10 text-xs">
            <p><strong>Info:</strong> {senInfo.desc}</p>
            <p><strong>Cameras:</strong> {senInfo.camera}</p>
          </div>
        )}
      </div>

      {/* Output Preview */}
      <div className="p-3 bg-brutal-black border-2 border-brutal-yellow">
        <p className="text-xs text-brutal-gray mb-1 uppercase tracking-wider">Output Fragment:</p>
        <p className="text-sm text-brutal-cream font-mono">
          <span className="text-brutal-yellow">{focalLength}</span>{" "}
          <span className="text-brutal-cyan">{aperture}</span>,{" "}
          <span className="text-brutal-red">{sensor}</span> sensor
        </p>
      </div>
    </div>
  );
}
