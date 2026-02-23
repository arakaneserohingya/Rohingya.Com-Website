"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Pause, SkipForward, SkipBack, Volume2, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Track {
  id: number
  title: string
  artist: string
  duration: string
  category: string
}

import { musicTracks as tracks } from "@/lib/data/music"

export function MusicPlayer() {
  const [activeTrack, setActiveTrack] = useState<Track>(tracks[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [likedTracks, setLikedTracks] = useState<Set<number>>(new Set())

  function toggleLike(id: number) {
    setLikedTracks((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px w-12 bg-accent" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Featured Playlist
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Now playing panel */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              {/* Album art */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/rohingya-music.jpg"
                  alt="Now playing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/40" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    Now Playing
                  </p>
                  <h3 className="text-xl font-bold text-primary-foreground">
                    {activeTrack.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {activeTrack.artist}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="p-6">
                {/* Progress bar */}
                <div className="mb-4">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-1/3 rounded-full bg-accent transition-all" />
                  </div>
                  <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                    <span>1:24</span>
                    <span>{activeTrack.duration}</span>
                  </div>
                </div>

                {/* Playback buttons */}
                <div className="flex items-center justify-center gap-4">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-foreground">
                    <SkipBack className="h-5 w-5" />
                    <span className="sr-only">Previous track</span>
                  </Button>
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
                    <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full text-foreground">
                    <SkipForward className="h-5 w-5" />
                    <span className="sr-only">Next track</span>
                  </Button>
                </div>

                {/* Volume */}
                <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
                  <Volume2 className="h-4 w-4" />
                  <div className="h-1 w-24 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-3/4 rounded-full bg-primary/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Track list */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Traditional Collection
              </h2>
              <span className="text-sm text-muted-foreground">
                {tracks.length} tracks
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveTrack(track);
                      setIsPlaying(true);
                    }
                  }}
                  onClick={() => {
                    setActiveTrack(track)
                    setIsPlaying(true)
                  }}
                  className={`group flex items-center gap-4 cursor-pointer rounded-xl px-4 py-3.5 text-left transition-all ${activeTrack.id === track.id
                    ? "bg-primary/8 ring-1 ring-primary/20"
                    : "hover:bg-secondary"
                    }`}
                >
                  {/* Track number / play icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-bold text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {activeTrack.id === track.id && isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <span className="group-hover:hidden">{String(index + 1).padStart(2, "0")}</span>
                    )}
                    <Play className="hidden h-4 w-4 group-hover:block" />
                  </div>

                  {/* Track info */}
                  <div className="min-w-0 flex-1">
                    <p
                      className={`truncate text-sm font-semibold ${activeTrack.id === track.id ? "text-primary" : "text-foreground"
                        }`}
                    >
                      {track.title}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {track.artist}
                    </p>
                  </div>

                  {/* Category badge */}
                  <span className="hidden rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:inline-block">
                    {track.category}
                  </span>

                  {/* Like button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(track.id)
                    }}
                    className="shrink-0 text-muted-foreground transition-colors hover:text-accent"
                    aria-label={likedTracks.has(track.id) ? "Unlike" : "Like"}
                  >
                    <Heart
                      className={`h-4 w-4 ${likedTracks.has(track.id) ? "fill-accent text-accent" : ""
                        }`}
                    />
                  </button>

                  {/* Duration */}
                  <div className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{track.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
