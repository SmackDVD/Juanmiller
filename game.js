function drawUnit(u){
  const st = u.st, y = GROUND;
  const hasImg = st.img && st.img.complete && st.img.naturalWidth > 0;
  let w = 0, h = 0;
  if(hasImg){
    const s = st.artSize / Math.max(st.img.naturalWidth, st.img.naturalHeight);
    w = st.img.naturalWidth * s; h = st.img.naturalHeight * s;
  }
  ctx.fillStyle = 'rgba(0,0,0,.16)';
  ctx.beginPath(); ctx.ellipse(u.x, y + 5, Math.max(10, w * .42), 5, 0, 0, 7); ctx.fill();
  ctx.save();
  ctx.translate(u.x + u.lunge * 7 * u.dir, y + Math.sin(u.bob) * 2);
  if(st.wheels){ ctx.rotate(Math.sin(u.roll * 6) * 0.06); }
  else{
    if(u.kbFlash > 0) ctx.rotate((Math.random() - .5) * .35);
    if(u.dir < 0) ctx.scale(-1, 1);
  }
  if(hasImg){
    ctx.drawImage(st.img, -w / 2, -h, w, h);
  } else if(st.emoji){
    ctx.font = st.size + 'px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(st.emoji, 0, -6);
  } else {
    ctx.fillStyle = '#ddd'; ctx.beginPath(); ctx.arc(0, -st.artSize / 2, st.artSize / 2, 0, 7); ctx.fill();
  }
  ctx.restore();
  if(hasImg && st.img.badge){
    const r = h * 0.13, bx = u.x + w * 0.30, by = y - h + h * 0.24;
    ctx.fillStyle = '#e01f1f';
    ctx.beginPath(); ctx.arc(bx, by, r, 0, 7); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = '900 ' + Math.round(r * 1.5) + 'px system-ui';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('2', bx, by);
  }
  if(u.hp < u.maxHp){
    const bw = Math.max(30, (w || st.artSize) * .9), f = Math.max(0, u.hp / u.maxHp);
    ctx.fillStyle = 'rgba(0,0,0,.45)'; ctx.fillRect(u.x - bw / 2, y - (h || st.artSize) - 16, bw, 5);
    ctx.fillStyle = f > .5 ? '#5ad35a' : f > .25 ? '#ffb84d' : '#ff5d5d';
    ctx.fillRect(u.x - bw / 2, y - (h || st.artSize) - 16, bw * f, 5);
  }
}
