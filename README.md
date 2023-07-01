gantt
    dateFormat  HH:mm
    axisFormat  %H:%M
    title 夏休みの生活スケジュール

    section 平日
    起床・朝食              :a1, 08:00, 00:30
    身支度・準備            :a2, after a1, 00:30
    勉強（数学）            :study-math, after a2, 02:30
    昼食                    :a3, after study-math, 00:30
    勉強（英語）            :study-english, after a3, 01:30
    休憩・ストレッチ        :a4, after study-english, 00:30
    勉強（国語）            :study-japanese, after a4, 01:30
    休憩・軽食              :a5, after study-japanese, 00:30
    勉強（理科・社会）      :study-science, after a5, 01:30
    レクリエーション        :recreation, after study-science, 00:30
    夕食                    :a6, after recreation, 01:00
    自主学習                :self-study, after a6, 01:30
    風呂・入浴              :a7, after self-study, 00:30
    趣味の時間              :hobby-time, after a7, 01:00
    準備・就寝準備          :a8, after hobby-time, 00:30
    就寝                    :a9, after a8, 00:00

    section 休日
    起床・朝食              :b1, 08:30, 00:30
    趣味の時間              :hobby-time-2, after b1, 01:30
    休憩・軽食              :b2, after hobby-time-2, 00:30
    自主学習                :self-study-2, after b2, 01:30
    昼食                    :b3, after self-study-2, 01:00
    外出                    :going-out, after b3, 02:00
    休憩・軽食              :b4, after going-out, 00:30
    趣味の時間              :hobby-time-3, after b4, 01:30
    レクリエーション        :recreation-2, after hobby-time-3, 00:30
    夕食                    :b5, after recreation-2, 01:00
    家族や趣味の時間        :family-time, after b5, 01:30
    風呂・入浴              :b6, after family
