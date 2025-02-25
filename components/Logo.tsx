export default function Logo() {
  return (
    <div className="relative w-16 h-16">
      {/* 외부 네온 글로우 효과 (다중 레이어) */}
      <div className="absolute inset-0 rounded-full bg-black/20 dark:bg-white/20 blur-2xl" />
      <div className="absolute inset-1 rounded-full bg-black/20 dark:bg-white/20 blur-xl" />
      <div className="absolute inset-2 rounded-full bg-black/20 dark:bg-white/20 blur-lg" />

      {/* 메인 원 */}
      <div className="absolute inset-2">
        <div
          className="w-full h-full rounded-full bg-black dark:bg-white 
          shadow-[0_0_20px_rgba(0,0,0,0.4),0_0_40px_rgba(0,0,0,0.2),inset_0_0_10px_rgba(255,255,255,0.4)] 
          dark:shadow-[0_0_20px_rgba(255,255,255,0.4),0_0_40px_rgba(255,255,255,0.2),inset_0_0_10px_rgba(255,255,255,0.4)]"
        />

        {/* 내부 광택 효과 */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent dark:from-white/30" />

        {/* 추가 하이라이트 */}
        <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/50 via-transparent to-transparent" />
      </div>
    </div>
  );
}
