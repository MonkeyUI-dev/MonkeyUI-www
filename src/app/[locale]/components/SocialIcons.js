"use client";

import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const POPUP_GAP = 12; /* px – space between button and popup */

export default function SocialIcons({ xUrl, xiaohongshuUrl }) {
  const [showQr, setShowQr] = useState(false);
  const btnRef = useRef(null);
  const popupRef = useRef(null);
  const [popupPos, setPopupPos] = useState(null);

  const updatePosition = useCallback(() => {
    if (!btnRef.current || !popupRef.current) return;
    const btnRect = btnRef.current.getBoundingClientRect();
    const popupH = popupRef.current.offsetHeight;
    setPopupPos({
      top: btnRect.top + window.scrollY - popupH - POPUP_GAP,
      left: btnRect.left + btnRect.width / 2 + window.scrollX,
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        btnRef.current && !btnRef.current.contains(event.target) &&
        popupRef.current && !popupRef.current.contains(event.target)
      ) {
        setShowQr(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!showQr) return;
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [showQr, updatePosition]);

  /* Measure popup height after portal mounts, then position */
  useLayoutEffect(() => {
    if (showQr && popupRef.current) {
      updatePosition();
    }
  }, [showQr, updatePosition]);

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

      <div className="social-icon-wrap">
        <button
          ref={btnRef}
          className="social-icon"
          onClick={() => setShowQr((v) => !v)}
          aria-label="WeChat"
          aria-expanded={showQr}
          type="button"
        >
          <Image src="/WechatFilled.svg" alt="WeChat" width={20} height={20} />
        </button>
      </div>

      {showQr && createPortal(
        <div
          ref={popupRef}
          className="wechat-qr-popup"
          style={{
            position: "absolute",
            left: popupPos ? popupPos.left : -9999,
            top: popupPos ? popupPos.top : -9999,
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
        >
          <Image
            src="/Wechat_contact.jpg"
            alt="WeChat QR Code"
            width={160}
            height={216}
            style={{ width: "10rem", height: "auto", maxWidth: "none" }}
          />
        </div>,
        document.body
      )}

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
