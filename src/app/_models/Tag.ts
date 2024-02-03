// the color coordinated languages on the portfolio cards

export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'yellow'); // defined a tag called Angular, static readonly acts as enums
    static readonly TYPESCRIPT = new Tag('Typescript', 'yellow'); 
    static readonly PYTHON = new Tag('Python', 'yellow'); 
    static readonly JAVA = new Tag('Java', 'yellow'); 
    static readonly NODEJS = new Tag('Node.JS', 'yellow'); 
    static readonly JAVASCRIPT = new Tag('Javascript', 'yellow'); 
    static readonly UIPATH = new Tag('UiPath', 'yellow'); 
    static readonly HTML = new Tag('HTML/CSS', 'yellow');
    static readonly VBNET = new Tag('Vb.Net', 'yellow');
    static readonly FLASK = new Tag('Flask', 'yellow');
    static readonly EXPRESSJS = new Tag('Express.JS', 'yellow');
    static readonly REACT = new Tag('React', 'yellow');
    static readonly SPRINGBOOT = new Tag('SpringBoot', 'yellow')




    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key
    }
}
