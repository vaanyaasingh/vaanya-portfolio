import { useState } from 'react';
import { Button } from './Button.jsx';
import { puzzle } from '../data/site.js';

const { symbols, solution, given } = puzzle;
const EMPTY = Array(16).fill(-1);
const GROUPS = [
  ...[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => r * 4 + c)),
  ...[0, 1, 2, 3].map((c) => [0, 1, 2, 3].map((r) => r * 4 + c)),
  [0, 1, 4, 5], [2, 3, 6, 7], [8, 9, 12, 13], [10, 11, 14, 15],
];

// null while there are empty squares, then true/false.
const check = (g) => (g.every((v) => v >= 0) ? GROUPS.every((gr) => new Set(gr.map((i) => g[i])).size === 4) : null);

/*
  4×4 sudoku of four things I love. Tap a square to cycle it. A full grid
  either ripples (solved) or gives a small shake (not yet).
*/
export function Puzzle() {
  const [grid, setGrid] = useState(EMPTY);
  const [shakes, setShakes] = useState(0);
  const cells = grid.map((v, i) => (given.includes(i) ? solution[i] : v));
  const ok = check(cells);

  const cycle = (i) => {
    if (given.includes(i) || ok) return;
    const next = [...grid];
    next[i] = grid[i] >= 3 ? -1 : grid[i] + 1;
    setGrid(next);
    if (check(next.map((v, j) => (given.includes(j) ? solution[j] : v))) === false) setShakes((n) => n + 1);
  };

  const status = ok === null ? 'Fill every square' : ok ? 'Solved. You know me a little now.' : 'Not quite. Check the rows.';

  return (
    <div className="board board--meadow puzzle">
      <span className="board__bg" aria-hidden="true" />
      <span className="card__grain" aria-hidden="true" />

      <div className="puzzle__side">
        <p className="puzzle__note">{puzzle.note}</p>
        <ul className="puzzle__legend">
          {symbols.map((s) => (
            <li key={s.name}>
              <span className="puzzle__chip" style={{ '--tone': `var(--${s.tone})` }} aria-hidden="true">{s.glyph}</span>
              <span><em>{s.name}</em>, {s.line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="puzzle__play">
        <div key={shakes} className={'puzzle__grid' + (ok ? ' is-solved' : '') + (ok === false && shakes ? ' is-wrong' : '')} role="group" aria-label="Mini sudoku">
          {cells.map((v, i) => {
            const s = symbols[v], fixed = given.includes(i), r = Math.floor(i / 4), c = i % 4;
            return (
              <button key={i} type="button" disabled={fixed || !!ok}
                className={'puzzle__cell' + (fixed ? ' is-given' : '') + (s ? ' is-filled' : '')}
                style={{ '--tone': s ? `var(--${s.tone})` : 'var(--paper-1)', '--d': (r + c) * 70 + 'ms' }}
                aria-label={`Row ${r + 1}, column ${c + 1}: ${s ? s.name : 'empty'}${fixed ? ' (given)' : ''}`}
                onClick={() => cycle(i)}>
                {s && <span key={v} className="puzzle__glyph"><span>{s.glyph}</span><em>{s.name}</em></span>}
              </button>
            );
          })}
        </div>
        <div className="puzzle__foot">
          <span className={'label puzzle__status' + (ok ? ' is-ok' : ok === false ? ' is-no' : '')} aria-live="polite">
            {ok && <span className="puzzle__star" aria-hidden="true">✳︎</span>}{status}
          </span>
          <Button variant="ghost" size="sm" onClick={() => setGrid(EMPTY)}>Reset</Button>
        </div>
      </div>
    </div>
  );
}
