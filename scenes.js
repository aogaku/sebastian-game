/* ============================================================
   SEBASTIAN — 真夜中の薔薇館
   Scene Data（関西弁お笑いバージョン）
   ============================================================ */

const IMG = {
  hall:    'images/image3.png',  // 大広間・階段
  corridor:'images/image1.png',  // 暗い廊下
  closeup: 'images/image2.png',  // 顔のクローズアップ
  gloves:  'images/image4.png',  // 白手袋を整える
  bowing:  'images/image5.png',  // 礼をする
};

const SCENES = {

  /* ========================================
     CHAPTER 1 ─ 嵐の夜の到着
     ======================================== */
  start:{
    chapter:1,
    bg:IMG.hall,
    character:null,
    speaker:'',
    bgm:'bgm1',
    text:'<span class="narration">―― 一八九X年、秋のことやった。<br>あんたを乗せた馬車、えらいとこまで来てしもて、断崖の上に建つ「ヴァルディア伯爵邸」にたどり着いてん。ほんまにこんなとこに住んでる人おんの？</span>',
    next:'s1_2'
  },
  s1_2:{
    bg:IMG.hall,
    speaker:'',
    text:'<span class="narration">身寄りのなくなったあんたの引受人がヴァルディア伯爵いうお方やったんやけど、そのお方、半年前からおらんくなってん。え、引き取りどないすんの？ 来てしもたけど？</span>',
    next:'s1_3'
  },
  s1_3:{
    bg:IMG.hall,
    speaker:'',
    text:'<span class="narration">門の前に一人の男が立っとった。黒い服でびっちゃびちゃに濡れて。普通に風邪ひきそうな状況やのに、どうやらこの館の執事らしい。大丈夫か？</span>',
    next:'s1_4'
  },
  s1_4:{
    bg:IMG.hall,
    character:IMG.bowing,
    effect:'character-show',
    speaker:'セバスチャン',
    text:'お待ちしとりましたで、お嬢様！ わてがこの館の執事、セバスチャン・ヴァルディアっちゅうもんでんがな。<br>ほな、よろしゅうお願いしますわ。……あの、濡れてますけど傘は——いや、なんでもないです。',
    next:'s1_5'
  },
  s1_5:{
    character:IMG.bowing,
    speaker:'セバスチャン',
    text:'伯爵はんの代わりに、館のことは全部わてがやっとります。<br>……あのう、傘の一本も用意できへんで申し訳ないですわ。いや実は傘どこにあるか探しとったんやけど、見つからへんで。',
    next:'s1_6'
  },
  s1_6:{
    character:IMG.closeup,
    effect:'heartbeat-start',
    speaker:'',
    text:'<span class="narration">顔を上げた瞬間、思わず「あっ」ってなった。めっちゃイケメンやん。なんでこんなとこにこんな顔のやつおんの？ 蝋燭の光に照らされてなんかもう反則やって。</span>',
    next:'s1_choice1'
  },
  s1_choice1:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……なんか？（じっと見てはりますけど）',
    choices:[
      {text:'「い、いえ……素敵な瞳をされていると思って」', affection:+2, next:'s1_a1'},
      {text:'「なんか愛想ないな、あんた」',               affection:-1, next:'s1_a2'},
      {text:'「よろしくお願いします、セバスチャン」',     affection:+1, next:'s1_a3'},
    ]
  },
  s1_a1:{
    character:IMG.closeup,
    effect:'heartbeat-stop',
    speaker:'セバスチャン',
    text:'……ほんまにそう思いまっか。ほなお嬢様の方がよっぽどきれいでっせ。<br>（こっそり笑た。めっちゃ笑た。でもすぐ無表情に戻した）',
    next:'s1_7'
  },
  s1_a2:{
    character:IMG.closeup,
    effect:'heartbeat-stop',
    speaker:'セバスチャン',
    text:'……そやなあ。わては感情いうもんが薄いんでっせ。人形みたいなもんでんがな。<br>あ、でも怒ったりはしますで。今ちょっとだけ傷ついてますわ。',
    next:'s1_7'
  },
  s1_a3:{
    character:IMG.closeup,
    effect:'heartbeat-stop',
    speaker:'セバスチャン',
    text:'こちらこそ！ お世話、一生懸命させてもらいますわ！<br>……一生懸命、ほんまに一生懸命やりますさかい。（なぜか妙に力が入っていた）',
    next:'s1_7'
  },
  s1_7:{
    bg:IMG.hall,
    character:IMG.bowing,
    speaker:'セバスチャン',
    text:'ほな、お部屋にご案内しまひょか。<br>……あのう、一つだけ頼みがあるんですけどな。',
    next:'s1_8'
  },
  s1_8:{
    character:IMG.closeup,
    effect:'shake',
    speaker:'セバスチャン',
    bgm:'bgm2',
    text:'夜中はな、絶対に西の塔に近づかんといてくださいよ。<br>頼みます、ほんまに頼みますから。お願いします。',
    next:'s1_9'
  },
  s1_9:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'それが伯爵はん——いや、現当主からの、唯一の命令でんねん。<br>いや「命令」やと固すぎるか。「お願い」ですわ。でも絶対守ってもらわんと困るやつの。',
    next:'s1_choice2'
  },
  s1_choice2:{
    character:IMG.closeup,
    speaker:'',
    text:'<span class="narration">禁忌、かあ。なんか気になって仕方ない。好奇心てほんまに困ったもんやわ。</span>',
    choices:[
      {text:'「分かりました。お約束します」',         affection:+2, next:'s1_b1'},
      {text:'「西の塔には、何があるんですか?」',     affection:0,  next:'s1_b2'},
      {text:'「秘密……ね。面白いじゃない」',         affection:-1, next:'s1_b3'},
    ]
  },
  s1_b1:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……おおきに！ お嬢様は賢いお方でんな。ほんまにおおきに。<br>（胸を撫で下ろす音がした）',
    next:'s1_end'
  },
  s1_b2:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……知らん方が幸せいうこともありますわな。どうか忘れとくれやす。<br>（でも絶対気になるやんな、そういうこと言うと）',
    next:'s1_end'
  },
  s1_b3:{
    character:IMG.closeup,
    effect:'shake',
    speaker:'セバスチャン',
    text:'……お嬢様。好奇心は身を滅ぼすいうやつでっせ。覚えといてくださいな。<br>（なんか急に怖いこと言ってしもた。自分でも顔が引きつっとる）',
    next:'s1_end'
  },
  s1_end:{
    bg:IMG.hall,
    character:null,
    speaker:'',
    bgm:'bgm1',
    text:'<span class="narration">こうして、薔薇館での最初の夜が始まったんやけど……正直まだいろいろ意味わかってへん。</span>',
    next:'chapter2_intro'
  },

  /* ========================================
     CHAPTER 2 ─ 真夜中の物音
     ======================================== */
  chapter2_intro:{
    chapter:2,
    bg:IMG.corridor,
    character:null,
    speaker:'',
    bgm:'bgm2',
    text:'<span class="narration">― 第二章 真夜中の物音（ほんまに何の音やねん）―</span>',
    next:'s2_1'
  },
  s2_1:{
    bg:IMG.corridor,
    speaker:'',
    text:'<span class="narration">深夜。雨の音に混じって、どっかからピアノの音がしてきた。古いピアノで、しかも調律が全然合うてへん。誰が夜中にこんな音のピアノ弾いとんの？</span>',
    next:'s2_2'
  },
  s2_2:{
    bg:IMG.corridor,
    speaker:'',
    text:'<span class="narration">音がする方向に廊下へ出てみたら、なんと蝋燭が全部消えとる。節電？ というか真っ暗で何も見えへんねんけど。誰かおる？</span>',
    effect:'heartbeat-start',
    next:'s2_3'
  },
  s2_3:{
    bg:IMG.corridor,
    speaker:'???',
    text:'……お嬢様。（暗闇の中から急に声がして腰が抜けそうになった）',
    next:'s2_4'
  },
  s2_4:{
    bg:IMG.corridor,
    character:IMG.closeup,
    effect:'character-show shake',
    speaker:'セバスチャン',
    text:'こんな夜中になんしとるんですか。<br>（めちゃくちゃびっくりした顔してるけどそれはこっちのセリフや）',
    next:'s2_5'
  },
  s2_5:{
    character:IMG.closeup,
    speaker:'',
    text:'<span class="narration">暗闇の中、セバスチャンの目だけがぼんやり光って見えた。え、なんで目が光っとるの？ 怖すぎる。でもなんかドキドキする。矛盾しとる。</span>',
    next:'s2_choice1'
  },
  s2_choice1:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……答えてもらえますか？（じっと見てくるんやけど）',
    choices:[
      {text:'「物音がしたから……怖くて」',               affection:+1, next:'s2_a1'},
      {text:'「あなたを、探していたの」',                 affection:+3, next:'s2_a2'},
      {text:'「西の塔の音やろ！ 正直に言いや！」',       affection:-2, next:'s2_a3'},
    ]
  },
  s2_a1:{
    character:IMG.closeup,
    effect:'heartbeat-stop',
    speaker:'セバスチャン',
    text:'……一人で起きとったんですか。すんまへん、わての管理不行き届きでんわ。<br>次からはちゃんと蝋燭ともしときますわ。ほんまに申し訳ないです。',
    next:'s2_6'
  },
  s2_a2:{
    character:IMG.closeup,
    effect:'heartbeat-stop',
    speaker:'セバスチャン',
    text:'……っ。そないな言葉、執事に言う言葉ちゃいますで、お嬢様。<br>（でも声が震えとる。わかりやすい。めちゃくちゃわかりやすい）',
    next:'s2_6'
  },
  s2_a3:{
    character:IMG.closeup,
    effect:'shake',
    speaker:'セバスチャン',
    text:'……お嬢様。あの音は風がガラスを鳴らしとるだけでんねん。<br>さ、お部屋戻りまひょ。今すぐ。（やや焦っとる。顔に出とる）',
    next:'s2_6'
  },
  s2_6:{
    character:IMG.gloves,
    effect:'character-show',
    speaker:'セバスチャン',
    text:'（白手袋をいそいそ整えながら）<br>……ほな、お部屋まで送りまっせ。手、貸してもらえますか？<br>（手袋しとるのに手を貸すって言う男）',
    next:'s2_choice2'
  },
  s2_choice2:{
    character:IMG.gloves,
    speaker:'',
    text:'<span class="narration">差し出された白い手袋の手。いや、手袋やから直接触れへんやん。なんやねんこの状況。</span>',
    choices:[
      {text:'そっと、その手を取る',         affection:+3, next:'s2_b1'},
      {text:'ためらいながら手を重ねる',     affection:+1, next:'s2_b2'},
      {text:'手を取らず、自分で歩く',       affection:-1, next:'s2_b3'},
    ]
  },
  s2_b1:{
    character:IMG.gloves,
    effect:'flash',
    speaker:'セバスチャン',
    text:'……熱いな。<br>（手袋越しやのにしっかり伝わってる体温に、思わず顔が赤くなった。隠せてへん）',
    next:'s2_7'
  },
  s2_b2:{
    character:IMG.gloves,
    speaker:'セバスチャン',
    text:'……おおきに、お嬢様。怖い思いさせてしもてすんまへんでした。<br>（ぎこちなく先導しはじめた）',
    next:'s2_7'
  },
  s2_b3:{
    character:IMG.gloves,
    speaker:'セバスチャン',
    text:'……。そないですか。<br>（行き場をなくした手が、虚しく空を握った。かわいそう。めちゃかわいそう）',
    next:'s2_7'
  },
  s2_7:{
    character:IMG.gloves,
    speaker:'セバスチャン',
    text:'お嬢様。<br>……わてのこと、信じすぎんといてくださいよ。ほんまに頼みます。<br>（なんか深刻な顔してるけどなんやねんその言葉）',
    next:'s2_end'
  },
  s2_end:{
    bg:IMG.corridor,
    character:null,
    speaker:'',
    text:'<span class="narration">なんでそんなこと言うの。聞き返そうとしたら、もう廊下の奥に消えとった。足音もなく消えよった。忍者かよ。</span>',
    effect:'heartbeat-stop',
    next:'chapter3_intro'
  },

  /* ========================================
     CHAPTER 3 ─ 紅茶と告白
     ======================================== */
  chapter3_intro:{
    chapter:3,
    bg:IMG.hall,
    character:null,
    speaker:'',
    bgm:'bgm1',
    text:'<span class="narration">― 第三章 紅茶と告白（なんか色々ありそうやな）―</span>',
    next:'s3_1'
  },
  s3_1:{
    bg:IMG.hall,
    speaker:'',
    text:'<span class="narration">翌朝。朝日が差し込んで、館がめちゃくちゃキラキラしとった。昨夜のことが嘘みたいやわ。セバスチャンと廊下で会ったのも夢やったんかな。いや夢ちゃうかったわ。絶対現実やったわ。</span>',
    next:'s3_2'
  },
  s3_2:{
    bg:IMG.hall,
    character:IMG.gloves,
    effect:'character-show',
    speaker:'セバスチャン',
    text:'おはようございます、お嬢様！ 朝のお茶、用意しましたで。<br>バラの花びら浮かべてみましたわ。インスタ映えするやろ思て。（言い方がなんかちぐはぐ）',
    next:'s3_3'
  },
  s3_3:{
    character:IMG.gloves,
    speaker:'セバスチャン',
    text:'……昨夜はちょっとアレでしたな。できれば夢やったと思て忘れてもらえると助かるんですけど。<br>あかんですか？ そうですか。（諦め顔）',
    next:'s3_choice1'
  },
  s3_choice1:{
    character:IMG.gloves,
    speaker:'',
    text:'<span class="narration">忘れろと。でも手の感触、まだちゃんと覚えてるんやけどな。手袋越しでもちゃんとわかったんやから。</span>',
    choices:[
      {text:'「忘れられない――あなたのことが」',       affection:+3, next:'s3_a1'},
      {text:'「セバスチャン、本当のことを話して」',   affection:+1, next:'s3_a2'},
      {text:'「分かったわ。忘れる」',                 affection:0,  next:'s3_a3'},
    ]
  },
  s3_a1:{
    character:IMG.closeup,
    effect:'flash heartbeat-start',
    speaker:'セバスチャン',
    text:'……ッ。お嬢様、それ、その発言はちょっと困りますわ……。<br>（白い頬がみるみる赤くなっていった。結構わかりやすい。いやめちゃくちゃわかりやすい）',
    next:'s3_4'
  },
  s3_a2:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'本当のこと？ ……聞いて後悔せえへんかったらええんですけどな。<br>（渋い顔してる）',
    next:'s3_4'
  },
  s3_a3:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……おおきに。<br>（なんかちょっと寂しそうな顔しとる。「忘れる」言うたのに急に罪悪感が出てきた）',
    next:'s3_4'
  },
  s3_4:{
    bg:IMG.hall,
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……お嬢様。<br>一個だけ言わせてもらってもええですか？',
    next:'s3_5'
  },
  s3_5:{
    character:IMG.closeup,
    effect:'heartbeat-start',
    speaker:'セバスチャン',
    bgm:'bgm2',
    text:'わてがこの館で執事してから——もう五十年になりますねん。',
    next:'s3_6'
  },
  s3_6:{
    character:IMG.closeup,
    effect:'shake',
    speaker:'',
    text:'<span class="narration">五十年。え待って、このひと、どう見ても二十代やん。五十年て。計算合わへん。絶対合わへん。え、何者なん？</span>',
    next:'s3_choice2'
  },
  s3_choice2:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……逃げてもええんですよ。逃げても恨んだりしませんから。<br>（なぜか先に逃げることを勧めてくる。なんやねんこの人）',
    choices:[
      {text:'「逃げないわ。あなたのそばにいる」',     affection:+3, next:'s3_b1'},
      {text:'「……怖い。けれど、聞かせて」',         affection:+2, next:'s3_b2'},
      {text:'「そんな話、信じられないわ!」',         affection:-2, next:'s3_b3'},
    ]
  },
  s3_b1:{
    character:IMG.closeup,
    effect:'flash',
    speaker:'セバスチャン',
    text:'……お嬢様。なんであんたそういうことを平気で言えるんですか。<br>わて、心臓に悪いんですけど。（手が震えとる。全力で動揺しとる）',
    next:'s3_7'
  },
  s3_b2:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……おおきにです。怖いて言うてくれた方が、わてとしてはほっとしますわ。<br>そっちの方がよっぽど人間らしいでんがな。',
    next:'s3_7'
  },
  s3_b3:{
    character:IMG.closeup,
    effect:'shake',
    speaker:'セバスチャン',
    text:'……そうですわな。信じへん方がお嬢様のためでっせ。<br>（なんかわかったような顔してる。ちょっとムカつく顔してる）',
    next:'s3_7'
  },
  s3_7:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'伯爵はん、行方不明ちゃうんですわ。<br>……西の塔におはるんです。',
    effect:'heartbeat-stop',
    next:'s3_end'
  },
  s3_end:{
    bg:IMG.hall,
    character:null,
    speaker:'',
    text:'<span class="narration">お茶の湯気がゆらゆら揺れとった。真実はもうすぐそこやねん。紅茶が冷めるまでには全部わかる気がした。いや冷めてるかもしれん。</span>',
    next:'chapter4_intro'
  },

  /* ========================================
     CHAPTER 4 ─ 西の塔
     ======================================== */
  chapter4_intro:{
    chapter:4,
    bg:IMG.corridor,
    character:null,
    speaker:'',
    bgm:'bgm2',
    text:'<span class="narration">― 第四章 西の塔の真実（ついに来てしもた）―</span>',
    next:'s4_1'
  },
  s4_1:{
    bg:IMG.corridor,
    speaker:'',
    text:'<span class="narration">禁忌の塔。錆びた螺旋階段をセバスチャンが黙って登っていく。一段ごとに心臓がドキドキいうてる。なんで錆びてんの、掃除してへんの？ 執事やろ？</span>',
    effect:'heartbeat-start',
    next:'s4_2'
  },
  s4_2:{
    bg:IMG.corridor,
    character:IMG.bowing,
    effect:'character-show',
    speaker:'セバスチャン',
    text:'……ここからがわての、まあ故郷みたいなもんですわ。<br>お嬢様、最後にもう一回聞きますで。',
    next:'s4_3'
  },
  s4_3:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'戻りますか？ このまま何も知らんくて、明日の朝に馬車呼んで帰ることもできますで。<br>（選択肢を与えてくる。なんでこっちに決めさせるの）',
    next:'s4_choice1'
  },
  s4_choice1:{
    character:IMG.closeup,
    speaker:'',
    text:'<span class="narration">最後の分かれ道や。戻るなら今しかない。でもここまで来て戻れる？ 戻れへんやろ普通。</span>',
    choices:[
      {text:'「進むわ。あなたと一緒に」',               affection:+4, next:'s4_a1'},
      {text:'「逃げるなら、あなたも一緒に来て」',       affection:+2, next:'s4_a2'},
      {text:'「……戻るわ。私は、何も見なかった」',     affection:-3, next:'s4_a3'},
    ]
  },
  s4_a1:{
    character:IMG.closeup,
    effect:'flash',
    speaker:'セバスチャン',
    text:'……お嬢様はほんまに……どこまでわてのことを……。<br>（声がひっくり返った。初めて崩れた表情。結構かわいい）',
    next:'s4_4'
  },
  s4_a2:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'お嬢様。<br>……わて、この館から出られへんのです。物理的に。ほんまに出られへんのんです。',
    next:'s4_4'
  },
  s4_a3:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……それが正解でっせ。でもまあ最後に一個だけ話させてくれますか。<br>ちょっとだけ。ほんまにちょっとだけ。',
    next:'s4_4'
  },
  s4_4:{
    bg:IMG.corridor,
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'西の塔で寝てるんはな——<br>呪いのせいで姿を保てへんようなった現当主でんねん。<br>つまり、わて自身の影みたいなもんですわ。（さらっと言うとる）',
    next:'s4_5'
  },
  s4_5:{
    character:IMG.closeup,
    effect:'shake heartbeat-start',
    speaker:'セバスチャン',
    text:'わてはヴァルディア家の血筋の者でんがな。呪いのせいで、半分は人間、半分は獣として、この館に縛られとるんですわ。<br>半獣半人て言うたらわかりますか？',
    next:'s4_6'
  },
  s4_6:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'執事を演じてきたのはお客さんを騙して正体隠すためでんねん。<br>……お嬢様をお招きしたのも、実は……。',
    next:'s4_7'
  },
  s4_7:{
    character:IMG.closeup,
    effect:'flash',
    speaker:'セバスチャン',
    text:'呪いを解く方法はな、ヴァルディアの血を引く人の真実の愛やって言われとるんですわ。<br>……いや、わても「そんなん本当にあるんか」て思いましたよ？ でも本当なんです。',
    next:'s4_choice2'
  },
  s4_choice2:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……あんたを利用しようと思てたんです。<br>嫌いになりますか？（なんかここだけ急に神妙な顔してる）',
    choices:[
      {text:'「嫌いになんて、なれない」',               affection:+4, next:'s4_b1'},
      {text:'「……分かった。私が呪いを解くわ」',       affection:+3, next:'s4_b2'},
      {text:'「最低やな、あんた」',                     affection:-2, next:'s4_b3'},
      {text:'「私を騙したのね……許せない」',           affection:-4, next:'s4_b4'},
    ]
  },
  s4_b1:{
    character:IMG.closeup,
    effect:'flash heartbeat-stop',
    speaker:'セバスチャン',
    text:'……お嬢様。<br>（初めて膝をついて、手の甲にそっとキスした。なんかもう様になっとる）<br>あんたちゅう人は……ほんまに……。',
    next:'s4_end'
  },
  s4_b2:{
    character:IMG.closeup,
    effect:'heartbeat-stop',
    speaker:'セバスチャン',
    text:'……それ、命がけの話でっせ。ほんまにええんですか？<br>もう一回聞きます、ほんまにええんですか？（二回聞く）',
    next:'s4_end'
  },
  s4_b3:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'……そやな。おっしゃる通りや。でもわて、あんたのことを好きになってしもたんですわ。<br>ほんまに最低な男やと自分でも思いますわ。すんまへん。',
    next:'s4_end'
  },
  s4_b4:{
    character:IMG.closeup,
    effect:'shake',
    speaker:'セバスチャン',
    text:'……当然の言葉やと思います。明日の朝、馬車用意します。<br>もうここのこと思い出さんといてくれたら助かります。……ほんまに、おおきに。（深々と頭を下げた）',
    next:'s4_end'
  },
  s4_end:{
    bg:IMG.corridor,
    character:null,
    speaker:'',
    text:'<span class="narration">塔の最上階。月の光に照らされた扉が、静かにそこにある。開けたら絶対なんかある。絶対ある。もう後戻りできへん。</span>',
    effect:'heartbeat-stop',
    next:'chapter5_intro'
  },

  /* ========================================
     CHAPTER 5 ─ 月夜の誓い
     ======================================== */
  chapter5_intro:{
    chapter:5,
    bg:IMG.hall,
    character:null,
    speaker:'',
    bgm:'bgm2',
    text:'<span class="narration">― 最終章 月夜の誓い（ついに来てもたで）―</span>',
    next:'s5_1'
  },
  s5_1:{
    bg:IMG.hall,
    speaker:'',
    text:'<span class="narration">扉が開いた。中に横たわっとったんは——茨でぐるぐる巻きにされた、もう一人のセバスチャン。え、もう一人おんの？ そういうやつ？</span>',
    next:'s5_2'
  },
  s5_2:{
    bg:IMG.hall,
    character:IMG.closeup,
    effect:'character-show',
    speaker:'セバスチャン',
    text:'これがわての本当の姿でんねん。呪いに侵された半身ちゅうやつです。<br>……なんか説明が淡々としてますけど本人やからしゃあないですわな。',
    next:'s5_3'
  },
  s5_3:{
    character:IMG.closeup,
    speaker:'セバスチャン',
    text:'お嬢様。真実の口づけをしてもろたら、わて、ちゃんと人間になれるんですわ。<br>……でも、もしあんたの愛が嘘やったら。',
    next:'s5_4'
  },
  s5_4:{
    character:IMG.closeup,
    effect:'heartbeat-start shake',
    speaker:'セバスチャン',
    text:'……あんたが死にます。<br>これがヴァルディアの呪いですねん。（さらっと言ってるけどすごいこと言ってる）',
    next:'s5_choice1'
  },
  s5_choice1:{
    character:IMG.closeup,
    speaker:'',
    text:'<span class="narration">月の光がセバスチャンの頬を照らしてる。めちゃくちゃきれいな顔してる。でも「死ぬかも」って言われたとこやで？ どうすんの？</span>',
    choices:[
      {text:'迷わず、彼に口づける',                             affection:+3, next:'ending_branch'},
      {text:'「あなたを愛している」と告げてから、口づける',     affection:+2, next:'ending_branch'},
      {text:'抱きしめて、「一緒に呪いを背負う」と誓う',         affection:+2, next:'ending_branch'},
      {text:'「ごめんなさい」と踵を返す',                       affection:-5, next:'ending_branch'},
    ]
  },

  /* ending_branch is handled by engine: routes by affection */
};
