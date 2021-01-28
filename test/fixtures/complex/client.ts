// This file is auto-generated, don't edit it
import Source, * as $Source from '@scope/name';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class ComplexRequest extends $tea.Model {
  accessKey: string;
  body: Readable;
  strs: string[];
  header: ComplexRequestHeader;
  Num: number;
  configs: ComplexRequestConfigs;
  'path-name'?: ComplexRequestPath_name;
  part?: ComplexRequestPart[];
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      body: 'Body',
      strs: 'Strs',
      header: 'header',
      Num: 'Num',
      configs: 'configs',
      'path-name': 'path-name',
      part: 'Part',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      body: 'Readable',
      strs: { 'type': 'array', 'itemType': 'string' },
      header: ComplexRequestHeader,
      Num: 'number',
      configs: ComplexRequestConfigs,
      'path-name': ComplexRequestPath_name,
      part: { 'type': 'array', 'itemType': ComplexRequestPart },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComplexRequestHeader extends $tea.Model {
  content: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComplexRequestConfigs extends $tea.Model {
  key: string;
  value: string[];
  extra: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
      extra: 'extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComplexRequestPath_name extends $tea.Model {
  'path-key': string;
  static names(): { [key: string]: string } {
    return {
      'path-key': 'path-key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      'path-key': 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComplexRequestPart extends $tea.Model {
  'part-number'?: string;
  static names(): { [key: string]: string } {
    return {
      'part-number': 'PartNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      'part-number': 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends Source {
  _configs: $Source.Config[];

  constructor(config: $Source.Config) {
    super(config);
    this._configs[0] = config;
  }

  async complex1(request: ComplexRequest, client: Source): Promise<$Source.RuntimeObject> {
    let _runtime: { [key: string]: any } = {
      timeouted: "retry",
    }

    let _lastRequest = null;
    let _now = Date.now();
    let _retryTimes = 0;
    while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
      if (_retryTimes > 0) {
        let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
        if (_backoffTime > 0) {
          await $tea.sleep(_backoffTime);
        }
      }

      _retryTimes = _retryTimes + 1;
      try {
        let request_ = new $tea.Request();
        let name = "complex";
        let mapVal = {
          test: "ok",
        };
        let moduleModelMapVal : {[key: string ]: $Source.RuntimeObject} = { };
        let moduleMapVal : {[key: string ]: Source} = { };
        let modelMapVal : {[key: string ]: ComplexRequest} = { };
        let subModelMapVal : {[key: string ]: ComplexRequestHeader} = { };
        let version = `/${"2019-01-08"}${this._pathname}`;
        let mapAccess = this._API[version];
        request_.protocol = this._protocol;
        request_.port = 80;
        request_.method = "GET";
        request_.pathname = `/${this._pathname}`;
        request_.query = Source.query({
          date: "2019",
          access: mapAccess,
          test: mapVal["test"],
          ...request.header,
        });
        request_.body = Source.body();
        _lastRequest = request_;
        let response_ = await $tea.doAction(request_, _runtime);

        if (true && true) {
          return null;
        } else if (true || false) {
          return new $Source.RuntimeObject({ });
        }

        client.print($tea.toMap(request), "1");
        await client.printAsync($tea.toMap(request), "1");
        await this.hello($tea.toMap(request), [
          "1",
          "2"
        ]);
        await this.hello(null, null);
        await this.Complex3(null);
        return $tea.cast<$Source.RuntimeObject>({ }, new $Source.RuntimeObject({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async Complex2(request: ComplexRequest, str: string[], val: {[key: string ]: string}): Promise<{[key: string]: any}> {
    let request_ = new $tea.Request();
    let name = "complex";
    let config = new $Source.Config({ });
    let client = new Source(config);
    request_.protocol = "HTTP";
    request_.port = 80;
    request_.method = "GET";
    request_.pathname = "/";
    request_.query = Source.query({
      date: "2019",
      version: "2019-01-08",
      protocol: request_.protocol,
    });
    request_.body = Source.body();
    let response_ = await $tea.doAction(request_);

    return { };
  }

  async Complex3(request: ComplexRequest): Promise<ComplexRequest> {
    let request_ = new $tea.Request();
    let name = "complex";
    request_.protocol = await this.TemplateString();
    request_.port = 80;
    request_.method = "GET";
    request_.pathname = "/";
    request_.query = Source.query({
      date: "2019",
    });
    request_.body = Source.body();
    request_.headers["host"] = "hello";
    let response_ = await $tea.doAction(request_);

    let resp = response_;
    let req = new $Source.Request({
      accesskey: request.accessKey,
      region: resp.statusMessage,
    });
    Client.array0($tea.toMap(request));
    req.accesskey = "accesskey";
    req.accesskey = request.accessKey;
    Source.parse(ComplexRequest);
    Source.array($tea.toMap(request), "1");
    await Source.asyncFunc();
    return $tea.cast<ComplexRequest>({
      ...request_.query,
    }, new ComplexRequest({}));
  }

  async hello(request: {[key: string]: any}, strs: string[]): Promise<string[]> {
    return Client.array1();
  }

  static async print(reqeust: $tea.Request, reqs: ComplexRequest[], response: $tea.Response, val: {[key: string ]: string}): Promise<$Source.Request> {
    return $tea.cast<$Source.Request>({ }, new $Source.Request({}));
  }

  static subConf(conf: $Source.RequestConfigs): $Source.RequestConfigsSubConf {
    return conf.subConf;
  }

  static array0(req: {[key: string]: any}): any[] {
    return [ ];
  }

  static array1(): string[] {
    return [
      "1"
    ];
  }

  static arrayAccess(): string {
    let configs = [
      "a",
      "b",
      "c"
    ];
    let config = configs[0];
    return config;
  }

  static arrayAccess2(): string {
    let data = {
      configs: [
        "a",
        "b",
        "c"
      ],
    };
    let config = data["configs"][0];
    return config;
  }

  static arrayAccess3(request: ComplexRequest): string {
    let configVal = request.configs.value[0];
    return configVal;
  }

  static pathName(request: ComplexRequest): string {
    let part = request.part[0];
    let part2 = new ComplexRequestPart({
      'part-number': "1234",
    });
    let part_3 = new $Source.RequestConfigsPath_name({
      key: "12",
      value: "34",
    });
    let part_4 = new ComplexRequestPath_name({
      'path-key': "12",
    });
    let value = part_3.value;
    return part.part_number;
  }

  static arrayAssign(config: string): string[] {
    let configs = [
      "a",
      "b",
      "c"
    ];
    configs[3] = config;
    return configs;
  }

  static arrayAssign2(config: string): string[] {
    let data = {
      configs: [
        "a",
        "b",
        "c"
      ],
    };
    data["configs"][3] = config;
    return data["configs"];
  }

  static arrayAssign3(request: ComplexRequest, config: string): void {
    request.configs.value[0] = config;
  }

  static mapAccess(request: ComplexRequest): string {
    let configInfo = request.configs.extra["name"];
    return configInfo;
  }

  static mapAccess2(request: $Source.Request): string {
    let configInfo = request.configs.extra["name"];
    return configInfo;
  }

  static mapAccess3(): string {
    let data = {
      configs: {
        value: "string",
      },
    };
    return data["configs"]["value"];
  }

  static mapAssign(request: ComplexRequest, name: string): void {
    request.configs.extra["name"] = name;
  }

  async TemplateString(): Promise<string> {
    return `/${this._protocol}`;
  }

  async emptyModel(): Promise<void> {
    new ComplexRequest({ });
    new ComplexRequestHeader({ });
  }

  async tryCatch(): Promise<void> {
    try {
      let str = await this.TemplateString();
    } catch (err) {
      let error = err;
    } finally {
      let final = "ok";
    }    
    try {
      let strNoFinal = await this.TemplateString();
    } catch (e) {
      let errorNoFinal = e;
    }    
    try {
      let strNoCatch = await this.TemplateString();
    } finally {
      let finalNoCatch = "ok";
    }    
  }

}
