// the color coordinated languages on the portfolio cards

export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'blue'); // defined a tag called Angular, static readonly acts as enums
    static readonly TYPESCRIPT = new Tag('Typescript', 'blue'); 
    static readonly PYTHON = new Tag('Python', 'royal blue'); 
    static readonly JAVA = new Tag('Java', 'blue'); 
    static readonly NODEJS = new Tag('Node.JS', 'blue'); 
    static readonly JAVASCRIPT = new Tag('Javascript', 'blue'); 
    static readonly UIPATH = new Tag('UiPath', 'blue'); 
    static readonly HTML = new Tag('HTML/CSS', 'blue');
    static readonly VBNET = new Tag('Vb.Net', 'blue');
    static readonly FLASK = new Tag('Flask', 'blue');
    static readonly EXPRESSJS = new Tag('Express.JS', 'blue');
    static readonly SPRINGBOOT = new Tag('SpringBoot', 'blue')


    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key
    }
}