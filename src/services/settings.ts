export class SettingsService {
    private altBackground = false;

    isAltBackground(){
        console.log(this.altBackground)
        return this.altBackground
    }

    setBackground(isAlt:boolean){
        console.log(isAlt)
        this.altBackground = isAlt
    }
}