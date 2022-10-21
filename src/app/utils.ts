export class ConsoleSpy {
    public logs: string[] = [];
    log(...args: any) {
        this.logs.push(args.join(' '));
    }
    warn(...args: any) {
        this.log(...args);
    }
}