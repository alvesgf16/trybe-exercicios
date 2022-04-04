class Tv {
  private _brand: string;

  private _size: number;

  private _resolution: string;

  private _connections: string[];

  private _connectedTo: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
    this._connectedTo = '';
  }

  turnOn() {
    console.log(this._brand, this._size, this._resolution, this._connections);
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(newConnection: string) {
    if (this._connections.find((connection) => connection === newConnection)) {
      this._connectedTo = newConnection;
    } else {
      console.log('Sorry, connection unavailable');
    }
  }
}

const tv = new Tv('Samsung', 43, '4K', ['HDMI', 'VGA', 'P2P']);
tv.turnOn();
tv.connectedTo = 'HDMI';
console.log(tv.connectedTo);
