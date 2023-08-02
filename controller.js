export default class Controller {
    // Controller iki classıda argument kimi
    // gəbul edir və onları öz contextinə əlavə edir ki
    // metodlarında görsənsin
    constructor(model, view) {
        this.model = model;
        this.view = view;

    }

    init() {
        // Burda view classında, buttonlara listenerləri asmaq üçün olan funksiyalara
        // controllerin içində olan metodları verirəm ki, buttonlar basilanda, burda
        // xəbərim olsun ki, modeli yenileyim, və view nu yeniləyim
        this.view.listenIncreaseButton(this.onIncrease.bind(this))
        // Burda funksiyaları bind olmadan ötürsək, onlar bu classın metodu
        // olduqlarını itirəcəklər, çünki kopiya kimi gedirlər o halda, amma
        // bind o kopiyaya context əlavə edir
        this.view.listenDecreaseButton(this.onDecrease.bind(this))
    }

    // Button basılanda modelde datanın yeniləməsini çağırıram burda
    // və daha sonra inputun içərisindəki datanı yeniləyirəm
    onIncrease() {
        this.model.increase();
        this.onUpdate();
    }

    // Button basılanda modelde datanın yeniləməsini çağırıram burda
    // və daha sonra inputun içərisindəki datanı yeniləyirəm
    onDecrease() {
        this.model.decrease();
        this.onUpdate();
    }

    // İnputun yenilənməsi üçün, modelde olan son 
    // datanı ona ötürürəm
    onUpdate() {
        this.view.refreshDisplay(this.model.count);
    }
}