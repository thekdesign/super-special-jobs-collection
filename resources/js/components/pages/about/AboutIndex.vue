<template>
    <div class="rpg-shell max-w-3xl">
        <header class="text-center mb-10">
            <div class="text-5xl mb-4 animate-pixel-float inline-block">📖</div>
            <h1 class="font-body font-bold text-3xl sm:text-4xl text-ink-50 mb-3">
                關於這本圖鑑
            </h1>
            <div class="font-pixel-en text-magenta-300 text-[10px] tracking-widest">
                ABOUT THIS DEX
            </div>
        </header>

        <div class="dialog-box mb-8">
            <div class="font-pixel-en text-[10px] text-magenta-500 mb-3 tracking-widest">
                ▶ MISSION
            </div>
            <p class="font-body text-base text-night-800 leading-relaxed pr-6">
                這是一本「現代都市奇職圖鑑」。我們不評斷職業的真假，只是把那些
                <span class="font-bold text-magenta-500">沒有國家證照、沒有教科書、沒有任何主管機關</span>
                但你身邊就有人在做的職業，當成 RPG 裡的角色一個一個收錄起來。
            </p>
        </div>

        <section class="pixel-frame pixel-frame--panel mb-6">
            <h2 class="font-pixel-en text-gold-300 text-sm tracking-widest mb-4">
                ▶ FAQ
            </h2>
            <div class="space-y-5">
                <div v-for="(qa, i) in faqs" :key="i">
                    <div class="font-body font-bold text-ink-50 mb-2 leading-tight">
                        <span class="font-pixel-en text-magenta-300 text-xs mr-2">Q{{ i + 1 }}.</span>
                        {{ qa.q }}
                    </div>
                    <div class="font-body text-ink-200 leading-relaxed pl-8">
                        {{ qa.a }}
                    </div>
                </div>
            </div>
        </section>

        <section class="pixel-frame pixel-frame--gold mb-6">
            <h2 class="font-pixel-en text-gold-300 text-sm tracking-widest mb-4">
                ⚠ DISCLAIMER · 免責聲明
            </h2>
            <ul class="space-y-2 font-body text-ink-100 text-sm leading-relaxed">
                <li class="flex gap-2">
                    <span class="text-gold-300">▸</span>
                    本圖鑑內容皆為一般性介紹與幽默觀察，不構成對任何特定職業的褒貶。
                </li>
                <li class="flex gap-2">
                    <span class="text-gold-300">▸</span>
                    收錄職業中，不少在身心靈、輔助治療、生活諮詢等領域有真實價值與從業者；
                    請勿因為這裡的玩笑話而誤判其專業性。
                </li>
                <li class="flex gap-2">
                    <span class="text-gold-300">▸</span>
                    請勿用這本圖鑑作為人生重大決策依據。
                    請也不要因為這裡寫「真實度低」就跑去揭穿你阿姨的塔羅老師。
                </li>
                <li class="flex gap-2">
                    <span class="text-gold-300">▸</span>
                    若你本身就是這些職業的從業者，並且因為這本圖鑑感到被冒犯，
                    我們事先誠摯道歉，並將你列入「被幽默誤傷」的勇者名單第 1 名。
                </li>
            </ul>
        </section>

        <section class="text-center pt-6">
            <RouterLink :to="{name: 'HOME_INDEX'}" class="pixel-btn pixel-btn--gold">
                ▶ 開始探索圖鑑
            </RouterLink>
        </section>
    </div>
</template>

<script>
import {useSiteHead} from 'libs/seo';

export default {
    name: 'AboutIndex',
    setup() {
        useSiteHead({
            title: '關於圖鑑 · Super Special Jobs',
            description: '為什麼我們做這本圖鑑、收錄標準、分類解釋與免責聲明。',
            ogImage: '/og/home.png',
            path: '/about',
        });
    },
    data() {
        return {
            faqs: [
                {
                    q: '為什麼要做這本圖鑑？',
                    a: '因為在 IG / Threads 滑久了，會發現現代社會的職業比寶可夢還多種類，而且每隔半年就有新品種。我們覺得這些「特別職業」應該值得一份正式但帶點幽默的圖鑑，而不是只有路人留言區的嘲笑。',
                },
                {
                    q: '怎麼決定收錄哪些職業？',
                    a: '兩大條件：① 沒有國家認證的執照、沒有大學科系直接對應；② 你身邊真的有人在做。「太極大師」雖然玄但有正式體育協會，所以沒收；「氣場攝影師」就符合兩個條件。',
                },
                {
                    q: '怎麼計算 AURA / WTF / USE 三個數值？',
                    a: 'AURA 是「玄學成分」、WTF 是「聽起來有多離奇」、USE 是「真的有用的程度」。三個都是 1-5 級，由作者主觀打分。請放心地對這個分數有意見。',
                },
                {
                    q: '我覺得圖鑑漏了某個職業！',
                    a: '太好了，這代表你比我們更熟悉這個世界的離奇程度。可以丟訊息給我們補進來。',
                },
                {
                    q: '網站為什麼長這樣，像素 RPG 是什麼意思？',
                    a: '8-bit 復古遊戲的視覺風格，靈感來自寶可夢圖鑑、勇者鬥惡龍對話框、太空戰士初代。挑這個風格是因為：① 看了會笑、② 每個職業變成一隻寶可夢、③ 我們想做這個風格已經很久了。',
                },
            ],
        };
    },
};
</script>
