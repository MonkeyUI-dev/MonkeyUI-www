"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function SocialIcons({ xUrl, xiaohongshuUrl }) {
  const [showQr, setShowQr] = useState(false);
  const qrRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (qrRef.current && !qrRef.current.contains(event.target)) {
        setShowQr(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="social-icons">
      <a
        className="social-icon"
        href={xUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="X (Twitter)"
      >
        <Image src="/TwitterX.svg" alt="X" width={18} height={18} />
      </a>

      <div className="social-icon-wrap" ref={qrRef}>
        <button
          className="social-icon"
          onClick={() => setShowQr((v) => !v)}
          aria-label="WeChat"
          aria-expanded={showQr}
          type="button"
        >
          <Image src="/WechatFilled.svg" alt="WeChat" width={20} height={20} />
        </button>
        {showQr && (
          <div className="wechat-qr-popup">
            <Image
              src="/Wechat_contact.jpg"
              alt="WeChat QR Code"
              width={160}
              height={216}
              style={{ width: "10rem", height: "auto", maxWidth: "none" }}
            />
          </div>
        )}
      </div>

      <a
        className="social-icon"
        href={xiaohongshuUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="小红书"
      >
        <Image src="/Xiaohongshu.svg" alt="小红书" width={20} height={20} />
      </a>
    </div>
  );
}
