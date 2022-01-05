import React, {useEffect, useState} from 'react'

export interface EventProps {
  callback: (result: any) => void;
}

export interface useChildFunctionsProps {
  watcher: (callback: () => any) => void;
  trigger: () => void;
  setTrigger: (isTriggered: boolean) => void;
}

interface State extends EventProps {
  isTriggered: boolean;
}

const useChildFunctions = (callback: (result: any) => void): useChildFunctionsProps => {
  const [state, setState] = useState<State>({callback, isTriggered: false});

  const trigger = () => {
    setState({...state, isTriggered: true});
  }

  const watcher = (callback: () => any): void => {
    if (state.isTriggered) {
      state.callback(callback());
    }
  }

  const setTrigger = (isTriggered: boolean) => {
    setState({...state, isTriggered: isTriggered});
  }

  return {trigger, watcher, setTrigger}
}

/*const useChildFunctions = (events: Array<EventProps>): useChildFunctionsProps => {
  const [state, setState] = useState<State>({
    myEvents: [],
    eventNameTriggered: ''
  });

  useEffect(() => {
    setState({...state, myEvents: events});
  }, [])

  const trigger = (eventName: string): void => {
    setState({...state, eventNameTriggered: eventName});
  }

  const watcher = (callback: (eventCalled: string) => any): void => {
    for (let i = 0; i !== state.myEvents.length; i += 1) {
      if (state.eventNameTriggered === state.myEvents[i].eventName) {
        state.myEvents[i].callback(callback(state.eventNameTriggered));
        setState({...state, eventNameTriggered: ''});
        return;
      }
    }
  }

  return {watcher, trigger};
}*/

export default useChildFunctions;