export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //detail은 프라이빗이라서 클래스내에서만 호출가능하지만 포맷 메소드는 퍼블릭이라 밖에서도 호출가능
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
//public : 디폴트값, 어디에서나 접근가능. 디폴트라 굳이 안써줘도 됨
//protected : 상속받은 하위클래스만 접근가능.
//private : 선언한 클래스 내에서만 접근가능. 클래스 내에 프라이빗 선언한게 있으면 클래스 밖에서는 호출할수 없음 (콘솔로그 등 안됨)
//readonly : 클래스 내외에서 읽기만 가능하고 바꿀수없음
