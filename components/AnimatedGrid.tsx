"use client";

import React, { useState, useEffect, useRef } from "react";

const AnimatedGrid: React.FC = () => {
  const [highlightedCells, setHighlightedCells] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const cellSize = 100;
  const sideMargin = 100;
  const topMargin = 40;

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const cols = Math.floor((dimensions.width - 2 * sideMargin) / cellSize);
  const rows = Math.floor(dimensions.height / cellSize);

  useEffect(() => {
    if (cols <= 0 || rows <= 0) return;

    const animateCell = () => {
      const randomCol = Math.floor(Math.random() * cols);
      const randomRow = Math.floor(Math.random() * rows);
      const cellId = `${randomCol}-${randomRow}`;

      setHighlightedCells((prev) => [...prev, cellId]);

      setTimeout(() => {
        setHighlightedCells((prev) => prev.filter((id) => id !== cellId));
      }, 5000);
    };

    // Запускаем анимацию случайных клеток
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        // 30% шанс подсветки новой клетки
        animateCell();
      }
    }, 500);

    // Начальная анимация
    for (let i = 0; i < 3; i++) {
      setTimeout(animateCell, i * 1000);
    }

    return () => clearInterval(interval);
  }, [cols, rows]);

  const getCellOpacity = (row: number): number => {
    const fadeStartRow = (dimensions.height * 0.6) / cellSize; // Начало затемнения на 60% высоты
    const fadeEndRow = (dimensions.height * 0.9) / cellSize; // Полное исчезновение на 90% высоты

    if (row < fadeStartRow) return 1;
    if (row >= fadeEndRow) return 0;

    const fadeProgress = (row - fadeStartRow) / (fadeEndRow - fadeStartRow);
    return 1 - fadeProgress;
  };

  if (dimensions.width === 0 || dimensions.height === 0) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 #0A0A0A overflow-hidden"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className="absolute"
        style={{
          left: `${sideMargin}px`,
          top: `${topMargin}px`,
          width: `${dimensions.width - 2 * sideMargin}px`,
          height: `${dimensions.height - topMargin}px`,
        }}
      >
        {Array.from({ length: rows }, (_, row) => (
          <div key={row} className="flex" style={{ height: `${cellSize}px` }}>
            {Array.from({ length: cols }, (_, col) => {
              const cellId = `${col}-${row}`;
              const isHighlighted = highlightedCells.includes(cellId);
              const opacity = getCellOpacity(row);

              return (
                <div
                  key={cellId}
                  className="relative"
                  style={{
                    width: `${cellSize}px`,
                    height: `${cellSize}px`,
                    backgroundColor: isHighlighted
                      ? `rgba(40, 40, 40, ${0.4 * opacity})` // for blocks
                      : "transparent",
                    transition: "background-color 1s ease-in-out",
                  }}
                >
                  {/* right grad */}
                  {col < cols - 1 && (
                    <div
                      className="absolute right-0 top-0 h-full"
                      style={{
                        width: "2px",
                        backgroundColor: `rgba(255, 255, 255, ${
                          0.05 * opacity
                        })`,
                      }}
                    />
                  )}
                  {/* down grad */}
                  {row < rows - 1 && (
                    <div
                      className="absolute bottom-0 left-0 w-full"
                      style={{
                        height: "2px",
                        backgroundColor: `rgba(255, 255, 255, ${
                          0.05 * opacity
                        })`,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Gradient opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
      to bottom,
      rgba(10, 10, 10, 0.8) 0%,
      rgba(10, 10, 10, 0) 15%,
      rgba(10, 10, 10, 0) 60%,
      rgba(10, 10, 10, 0.5) 75%,
      rgba(10, 10, 10, 0.9) 90%,
      #0A0A0A 100%
    )`,
        }}
      />
    </div>
  );
};

export default AnimatedGrid;
