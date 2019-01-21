import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef
} from '@angular/core';

import { ChildComponentRefConfig } from './../../_models/interfaces/config';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  private childComponentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  /**
   * Append a component to an html element
   * 
   * @param parentId - Id of parent element
   * @param child - component to be added to the parent element
   * @param childConfig - configuration for the child
   */
  public appendComponentTo(parentId: string, child: any, childConfig?: ChildComponentRefConfig) {
    const childComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(child)
      .create(this.injector);

    this.attachConfig(childConfig, childComponentRef);

    this.childComponentRef = childComponentRef;

    this.appRef.attachView(childComponentRef.hostView);

    const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.getElementById(parentId).appendChild(childDomElem);
  }

  /**
   * Remove component attached to the dom
   */
  public removeComponent() {
    this.appRef.detachView(this.childComponentRef.hostView);
    this.childComponentRef.destroy();
  }

  /**
   * Attaches configuration to a component reference
   * 
   * @param config - configuration for child component
   * @param componentRef - component to be configured
   */
  private attachConfig(config, componentRef) {
    let inputs = config.inputs;
    let outputs = config.outputs;

    componentRef.instance['inputs'] = inputs;

    componentRef.instance['outputs'] = outputs;
  }
}
