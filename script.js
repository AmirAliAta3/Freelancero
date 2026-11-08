/* ============================================================
 پ ر*وژه‌یار — Brutal Glass
 منطق و تعامل‌ها
 ============================================================ */

(function () {
    'use strict';

    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => [...r.querySelectorAll(s)];
    const fa = n => Number(n).toLocaleString('fa-IR');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(pointer:fine)').matches;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

    /* ---------- تم ---------- */
    const themeBtn = $('#theme');

    function setTheme(dark) {
        document.documentElement.dataset.theme = dark ? 'dark' : 'light';
        themeBtn.textContent = dark ? '☀' : '☾';
        try {
            localStorage.setItem('theme', dark ? 'dark' : 'light');
        } catch (e) { }
    }

    try {
        if (localStorage.getItem('theme') === 'dark') setTheme(true);
    } catch (e) { }

    const toggleTheme = () => setTheme(document.documentElement.dataset.theme !== 'dark');
    themeBtn.addEventListener('click', toggleTheme);

    /* ---------- نوار پیشرفت ---------- */
    const bar = $('#progress');

    function onScroll() {
        const h = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
        stackFx();
    }

    addEventListener('scroll', onScroll, { passive: true });

    /* ---------- مارکی ---------- */
    function buildMarquee(track, items, count) {
        const chunk = items.map(h => `<span>${h}</span>`).join('');
        track.innerHTML = Array(count).fill(chunk).join('');
    }

    buildMarquee(
        $('#mq'),
                 ['طراحی', 'برنامه‌نویسی', 'ترجمه', 'بازاریابی', 'داده', 'مشاوره', 'پرداخت امن', 'بدون واسطه'],
                 3
    );

    /* ---------- نظرات ---------- */
    const reviewsData = [
        ['تحویل سریع و تمیز، دقیقاً همان چیزی که می‌خواستم.', 'مریم ا.', '★★★★★'],
        ['ارتباط با متخصص راحت بود و پرداخت امن خیالم را راحت کرد.', 'امیر ح.', '★★★★★'],
        ['چند پیشنهاد گرفتم و مقایسه‌اش خیلی کمک کرد.', 'الهام ک.', '★★★★☆'],
        ['برای لندینگ‌پیجم یک طراح عالی پیدا کردم.', 'پدرام ر.', '★★★★★'],
        ['ترجمه‌ی تخصصی با کیفیتی فراتر از انتظار.', 'سمیرا م.', '★★★★★'],
        ['فرآیند ساده و شفاف؛ بدون دردسر.', 'کاوه ن.', '★★★★☆']
    ];

    const rvHTML = reviewsData
    .map(r => `<div class="rv glass"><p>${r[0]}</p><div><span>${r[1]}</span><span>${r[2]}</span></div></div>`)
    .join('');

    $('#rv').innerHTML = rvHTML + rvHTML;

    /* ---------- reveal ---------- */
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            setTimeout(() => { e.target.style.transitionDelay = '0ms'; }, 1100);
            io.unobserve(e.target);
        }
    }), { threshold: .12 });

    $$('.reveal').forEach((el, i) => {
        el.style.transitionDelay = (i % 3) * 100 + 'ms';
        io.observe(el);
    });

    /* ---------- شمارنده‌ها ---------- */
    const seen = new WeakSet();

    function tween(el, end, { dec = 0, suf = '', dur = 1400 } = {}) {
        if (seen.has(el)) return;
        seen.add(el);
        const from = 0, t0 = performance.now();

        const tick = t => {
            const p = Math.min((t - t0) / dur, 1);
            const v = from + (end - from) * (1 - Math.pow(1 - p, 4));
            el.textContent = v.toLocaleString('fa-IR', {
                minimumFractionDigits: dec,
                maximumFractionDigits: dec
            }) + suf;
            if (p < 1) requestAnimationFrame(tick);
        };

            requestAnimationFrame(tick);
    }

    const cio = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const end = parseFloat(el.dataset.count);
        const dec = parseInt(el.dataset.dec || '0', 10);
        tween(el, end, { dec, suf: el.dataset.suffix || '', dur: 1800 });
        cio.unobserve(el);
    }), { threshold: .5 });

    $$('[data-count]').forEach(el => cio.observe(el));

    /* ---------- کلمات هیرو ---------- */
    const words = $$('#slot b');
    let wi = 0;

    if (!reduce) {
        setInterval(() => {
            if (document.hidden) return;
            const cur = words[wi];
            wi = (wi + 1) % words.length;
            const nx = words[wi];
            cur.classList.remove('on');
            cur.classList.add('out');
            nx.classList.remove('out');
            nx.classList.add('on');
            setTimeout(() => cur.classList.remove('out'), 600);
        }, 2600);
    } else {
        words.forEach(w => w.classList.remove('on'));
        words[0].classList.add('on');
    }

    /* ---------- matcher ---------- */
    const DATA = {
        design: [
            { a: 'س', n: 'سارا احمدی', d: 'طراح UI/UX · ★ ۴.۹', p: 'از ۲٫۴ میلیون', t: '۳ روز' },
 { a: 'آ', n: 'آرش نوری', d: 'طراح لوگو · ★ ۴.۷', p: 'از ۱٫۲ میلیون', t: '۲ روز' }
        ],
 code: [
     { a: 'ر', n: 'رضا کریمی', d: 'بک‌اند Laravel · ★ ۵.۰', p: 'از ۸ میلیون', t: '۱۰ روز' },
 { a: 'ک', n: 'کیان صادقی', d: 'فرانت‌اند React · ★ ۴.۸', p: 'از ۶ میلیون', t: '۷ روز' }
 ],
 text: [
     { a: 'ن', n: 'نگار موسوی', d: 'مترجم و محتوا · ★ ۴.۸', p: 'از ۱.۵ میلیون', t: '۴ روز' },
 { a: 'پ', n: 'پگاه علوی', d: 'کپی‌رایتر · ★ ۴.۶', p: 'از ۹۰۰ هزار', t: '۲ روز' }
 ],
 market: [
     { a: 'د', n: 'دانیال فرهادی', d: 'سئو · ★ ۴.۷', p: 'از ۳ میلیون', t: '۵ روز' },
 { a: 'ا', n: 'الهام جعفری', d: 'کمپین شبکه‌های اجتماعی · ★ ۴.۹', p: 'از ۴ میلیون', t: '۶ روز' }
 ],
 data: [
     { a: 'ب', n: 'بهار منتظری', d: 'تحلیل‌گر داده · ★ ۴.۸', p: 'از ۵ میلیون', t: '۶ روز' },
 { a: 'س', n: 'سینا قاسمی', d: 'داشبورد BI · ★ ۴.۷', p: 'از ۷ میلیون', t: '۸ روز' }
 ]
    };

    const chips = $$('.chip');
    const results = $('#results');
    let mt, auto = true, ci = 0;

    function showMatch(k) {
        chips.forEach(c => c.classList.toggle('on', c.dataset.k === k));
        results.innerHTML = '<div class="searching"><i></i><i></i><i></i><span>در حال یافتن…</span></div>';
        clearTimeout(mt);

        mt = setTimeout(() => {
            results.innerHTML = DATA[k].map((p, i) =>
            `<div class="rc" style="animation-delay:${i * 130}ms">` +
            `<div class="av">${p.a}</div>` +
            `<div class="info"><b>${p.n}</b><small>${p.d}</small></div>` +
            `<div class="pr"><em>${p.p}</em>${p.t}</div>` +
            `</div>`
            ).join('');
        }, 650);
    }

    chips.forEach(c => c.addEventListener('click', () => {
        auto = false;
        showMatch(c.dataset.k);
    }));

    setTimeout(() => showMatch('design'), 1300);

    setInterval(() => {
        if (auto && !document.hidden) {
            ci = (ci + 1) % chips.length;
            showMatch(chips[ci].dataset.k);
        }
    }, 6500);

    /* ---------- تایپ کد ---------- */
    const codeLines = [
        '<span class="c">const</span> project = <span class="c">await</span> hire(<span class="s">"بهترین"</span>);',
 'project.<span class="c">deliver</span>({ quality: <span class="s">"تضمین‌شده"</span> });',
 '<span class="c">await</span> pay.<span class="c">release</span>(); <span class="s">// ✓</span>'
    ];

    const codeEl = $('#code');
    const codeRaw = codeLines.map(l => l.replace(/<[^>]+>/g, ''));

    (function typer() {
        if (reduce) {
            codeEl.innerHTML = codeLines.join('\n');
            return;
        }

        let li = 0, ch = 0;

        function step() {
            if (li >= codeLines.length) {
                setTimeout(() => {
                    li = 0;
                    ch = 0;
                    codeEl.innerHTML = '';
                    step();
                }, 2600);
                return;
            }

            ch++;
            const plain = codeRaw[li];
            let count = 0, html = '', inTag = false;

            for (const c of codeLines[li]) {
                if (c === '<') inTag = true;
                if (!inTag) {
                    if (count >= ch) break;
                    count++;
                }
                html += c;
                if (c === '>') inTag = false;
            }

            const opens = (html.match(/<span/g) || []).length;
            const closes = (html.match(/<\/span>/g) || []).length;
            html += '</span>'.repeat(Math.max(0, opens - closes));

            codeEl.innerHTML = (li > 0 ? codeLines.slice(0, li).join('\n') + '\n' : '') + html;

            if (ch >= plain.length) {
                li++;
                ch = 0;
                setTimeout(step, 300);
            } else {
                setTimeout(step, 38);
            }
        }

        step();
    })();

    /* ---------- کرسر ---------- */
    if (fine) {
        const dot = $('#dot');
        const ring = $('#ring');
        let mx = 0, my = 0, rx = 0, ry = 0;

        addEventListener('pointermove', e => {
            mx = e.clientX;
            my = e.clientY;
            dot.style.transform = `translate(${mx}px,${my}px)`;
        }, { passive: true });

        (function loop() {
            rx += (mx - rx) * .16;
            ry += (my - ry) * .16;
            ring.style.transform = `translate(${rx}px,${ry}px)`;
            requestAnimationFrame(loop);
        })();

        document.addEventListener('pointerover', e => {
            ring.classList.toggle('big', !!e.target.closest('a,button,.tilt,.d-item,.chip,.sw,input'));
        });

        document.addEventListener('pointerdown', () => ring.classList.add('click'));
        document.addEventListener('pointerup', () => ring.classList.remove('click'));

        addEventListener('pointerleave', () => {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        });

        addEventListener('pointerenter', () => {
            dot.style.opacity = '1';
            ring.style.opacity = '1';
        });
    }

    /* ---------- tilt ---------- */
    if (fine && !reduce) {
        $$('.tilt').forEach(el => {
            el.addEventListener('pointermove', e => {
                const r = el.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width;
                const y = (e.clientY - r.top) / r.height;
                el.style.setProperty('--ry', ((x - .5) * -10) + 'deg');
                el.style.setProperty('--rx', ((y - .5) * 10) + 'deg');
                el.style.setProperty('--mx', (x * 100) + '%');
                el.style.setProperty('--my', (y * 100) + '%');
            }, { passive: true });

            el.addEventListener('pointerleave', () => {
                el.style.setProperty('--rx', '0deg');
                el.style.setProperty('--ry', '0deg');
            });
        });
    }

    /* ---------- parallax + lens ---------- */
    const hero = $('#hero');

    if (!reduce && fine) {
        hero.addEventListener('pointermove', e => {
            const r = hero.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - .5;
            const y = (e.clientY - r.top) / r.height - .5;
            $$('.shape', hero).forEach(s => {
                const d = +s.dataset.depth;
                s.style.transform = `translate(${x * d * 2}px,${y * d * 2}px)`;
            });
        }, { passive: true });
    }

    if (fine && !reduce) {
        const lens = $('#lens');
        let tx = 0, ty = 0, lx = 0, ly = 0, run = false;

        hero.addEventListener('pointermove', e => {
            const r = hero.getBoundingClientRect();
            tx = e.clientX - r.left;
            ty = e.clientY - r.top;
            if (!run) {
                lx = tx;
                ly = ty;
                run = true;
            }
            lens.classList.add('on');
        }, { passive: true });

        hero.addEventListener('pointerleave', () => lens.classList.remove('on'));

        (function loop() {
            lx += (tx - lx) * .12;
            ly += (ty - ly) * .12;
            const sq = 1 + Math.min(Math.hypot(tx - lx, ty - ly) / 400, .25);
            lens.style.transform = `translate(${lx}px,${ly}px) scale(${sq},${2 - sq})`;
            requestAnimationFrame(loop);
        })();
    }

    /* ---------- استک ---------- */
    const cards = $$('.sc');

    function stackFx() {
        cards.forEach((c, i) => {
            const nx = cards[i + 1];
            if (!nx) {
                c.style.scale = '';
                c.style.filter = '';
                return;
            }
            const a = c.getBoundingClientRect();
            const b = nx.getBoundingClientRect();
            const p = clamp(1 - (b.top - a.top) / a.height, 0, 1);
            c.style.scale = (1 - p * .06).toFixed(4);
            c.style.filter = p > 0.05 ? `brightness(${(1 - p * .25).toFixed(3)})` : '';
        });
    }

    stackFx();

    /* ---------- ماشین‌حساب ---------- */
    const seg = $('#seg');
    const budget = $('#budget');
    const bv = $('#bv');
    const urgent = $('#urgent');
    let ctype = { d: 4, b: 6 };

    const numCache = new WeakMap();

    function tweenNum(el, end, dur) {
        const from = numCache.get(el) ?? 0;
        numCache.set(el, end);
        const t0 = performance.now();

        (function tick(t) {
            const p = Math.min((t - t0) / dur, 1);
            const v = Math.round(from + (end - from) * (1 - Math.pow(1 - p, 3)));
            el.textContent = fa(v);
            if (p < 1) requestAnimationFrame(tick);
        })(t0);
    }

    function calc() {
        const bud = +budget.value;
        const urg = urgent.classList.contains('on');

        // درصد واقعی برای پر شدن ترک — در RTL از راست
        const min = +budget.min || 1;
        const max = +budget.max || 60;
        const pct = clamp(((bud - min) / (max - min)) * 100, 0, 100);
        budget.style.setProperty('--p', pct.toFixed(2) + '%');

        bv.textContent = fa(bud);

        const proposals = clamp(Math.round(ctype.b + bud * .7), 3, 45);
        const days = Math.max(1, Math.round(ctype.d * (urg ? .6 : 1) * (1.15 - Math.min(bud, 40) / 120)));
        const online = proposals * 5;

        tweenNum($('#o1'), proposals, 600);
        tweenNum($('#o2'), days, 600);
        tweenNum($('#o3'), online, 700);
    }

    seg.addEventListener('click', e => {
        const b = e.target.closest('button');
        if (!b) return;
        $$('button', seg).forEach(x => x.classList.toggle('on', x === b));
        ctype = { d: +b.dataset.d, b: +b.dataset.b };
        calc();
    });

    budget.addEventListener('input', calc);

    const flip = () => {
        const on = urgent.classList.toggle('on');
        urgent.setAttribute('aria-checked', on);
        calc();
    };

    urgent.addEventListener('click', flip);
    urgent.addEventListener('keydown', e => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            flip();
        }
    });

    const cio2 = new IntersectionObserver(es => {
        if (es[0].isIntersecting) {
            calc();
            cio2.disconnect();
        }
    }, { threshold: .3 });

    cio2.observe($('.ticket'));
    calc();

    /* ---------- FAQ ---------- */
    $('#faqList').addEventListener('click', e => {
        const b = e.target.closest('button');
        if (!b) return;
        const item = b.parentElement;
        const was = item.classList.contains('open');
        $$('.fq').forEach(f => f.classList.remove('open'));
        if (!was) item.classList.add('open');
    });

        /* ---------- dock ---------- */
        const dock = $('#dock');
        const ditems = $$('.d-item', dock);

        if (fine && !reduce) {
            dock.addEventListener('pointermove', e => ditems.forEach(it => {
                const r = it.getBoundingClientRect();
                const d = e.clientX - (r.left + r.width / 2);
                it.style.setProperty('--s', (1 + .6 * Math.exp(-(d * d) / (2 * 52 * 52))).toFixed(3));
            }), { passive: true });

            dock.addEventListener('pointerleave', () =>
            ditems.forEach(it => it.style.setProperty('--s', 1))
            );
        }

        const sio = new IntersectionObserver(es => es.forEach(e => {
            if (e.isIntersecting) {
                ditems.forEach(d => d.classList.toggle('act', d.dataset.s === e.target.id));
            }
        }), { rootMargin: '-45% 0px -50% 0px' });

        ['hero', 'services', 'process', 'calc', 'talent', 'faq']
        .forEach(id => sio.observe($('#' + id)));

        /* ---------- کانفتی ---------- */
        function confetti(el) {
            if (reduce) return;
            const r = el.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const cy = r.top + r.height / 2;
            const cols = ['#f0e83a', '#2b4dff', '#ff3d2e', '#fff8e7', '#0a0a0a'];

            for (let i = 0; i < 50; i++) {
                const c = document.createElement('div');
                c.className = 'confetti';
                c.style.background = cols[i % cols.length];
                c.style.left = cx + 'px';
                c.style.top = cy + 'px';
                if (i % 3 === 0) c.style.borderRadius = '50%';
                document.body.appendChild(c);

                const a = Math.random() * Math.PI * 2;
                const d = 120 + Math.random() * 260;

                c.animate([
                    { transform: 'translate(0,0) rotate(0)', opacity: 1 },
                          {
                              transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d - 80}px) rotate(${Math.random() * 720}deg)`,
                          opacity: 1,
                          offset: .6
                          },
                          {
                              transform: `translate(${Math.cos(a) * d * 1.1}px,${Math.sin(a) * d + 300}px) rotate(900deg)`,
                          opacity: 0
                          }
                ], {
                    duration: 1400 + Math.random() * 600,
                          easing: 'cubic-bezier(.2,.7,.3,1)'
                }).onfinish = () => c.remove();
            }
        }

        $('#cta').addEventListener('click', e => {
            e.preventDefault();
            confetti(e.currentTarget);
        });

        $('#goBtn').addEventListener('click', e => confetti(e.currentTarget));

        /* ---------- توست ---------- */
        const msgs = [
            'سارا یک پروژه‌ی طراحی را تحویل داد',
            'پروژه‌ی جدید برنامه‌نویسی ثبت شد',
            'رضا ۵ ستاره گرفت ★',
            'پرداخت امن آزاد شد ✓',
            'نگار پیشنهاد جدید فرستاد',
            'یک متخصص تازه به جمع ما پیوست'
        ];

        let mi = 0;
        const tbox = $('#toasts');

        function toast() {
            const t = document.createElement('div');
            t.className = 'toast glass';
            t.innerHTML = `<i></i><span>${msgs[mi++ % msgs.length]}</span>`;
            tbox.appendChild(t);

            setTimeout(() => {
                t.classList.add('out');
                setTimeout(() => t.remove(), 400);
            }, 3600);
        }

        setTimeout(() => {
            toast();
            setInterval(toast, 6000);
        }, 3500);

        /* ---------- palette ---------- */
        const pal = $('#pal');
        const palq = $('#palq');
        const pall = $('#pall');

        const cmds = [
            { t: 'رفتن به بالای صفحه', h: '#hero' },
            { t: 'رفتن به خدمات', h: '#services' },
            { t: 'رفتن به فرآیند', h: '#process' },
            { t: 'برآورد پروژه', h: '#calc' },
            { t: 'متخصص‌های برتر', h: '#talent' },
            { t: 'سؤال‌های متداول', h: '#faq' },
            { t: 'تغییر تم روشن/تاریک', a: 'theme', k: 'تم' },
            { t: 'جشن بگیر 🎉', a: 'party', k: 'کانفتی' }
        ];

        let sel = 0, list = cmds;

        function renderPal() {
            const q = palq.value.trim();
            list = cmds.filter(c => !q || c.t.includes(q) || (c.k || '').includes(q));
            sel = Math.min(sel, Math.max(list.length - 1, 0));
            pall.innerHTML = list.map((c, i) =>
            `<li class="${i === sel ? 'sel' : ''}" data-i="${i}">` +
            `<span>${c.t}</span><small>${c.h || 'دستور'}</small>` +
            `</li>`
            ).join('') || '<li><span>چیزی پیدا نشد</span></li>';
        }

        function openPal() {
            pal.classList.add('open');
            palq.value = '';
            sel = 0;
            renderPal();
            setTimeout(() => palq.focus(), 50);
        }

        function closePal() {
            pal.classList.remove('open');
            palq.blur();
        }

        function runCmd(c) {
            if (!c) return;
            closePal();
            if (c.h) location.hash = c.h;
            else if (c.a === 'theme') toggleTheme();
            else if (c.a === 'party') confetti($('#cta'));
        }

        $('#openPal').addEventListener('click', openPal);

        pal.addEventListener('click', e => {
            if (e.target === pal) closePal();
            const li = e.target.closest('li[data-i]');
            if (li) runCmd(list[+li.dataset.i]);
        });

            palq.addEventListener('input', () => {
                sel = 0;
                renderPal();
            });

            addEventListener('keydown', e => {
                const typing = /INPUT|TEXTAREA/.test(document.activeElement.tagName);

                if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                    e.preventDefault();
                    pal.classList.contains('open') ? closePal() : openPal();
                    return;
                }

                if (!pal.classList.contains('open')) {
                    if (e.key === '/' && !typing) {
                        e.preventDefault();
                        openPal();
                    }
                    return;
                }

                if (e.key === 'Escape') closePal();
                else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    sel = (sel + 1) % Math.max(list.length, 1);
                    renderPal();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    sel = (sel - 1 + list.length) % Math.max(list.length, 1);
                    renderPal();
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    runCmd(list[sel]);
                }
            });

            onScroll();
})();
