import './style.css';
import { CITY_TYPES, SHARED_VERSION } from '@empiryu/shared';

// Phase 0: title screen. Proves the toolchain + shared import. Pixi map lands in Phase 1.
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="stage">
    <h1 class="title">Empiryu</h1>
    <p class="tagline">A realm of ${CITY_TYPES.length} ranks, waiting to be conquered.</p>
    <span class="badge">shared contract v${SHARED_VERSION} · online</span>
  </div>
`;
