import * as Flex from '@twilio/flex-ui';
import { replaceViewForCallbackAndVoicemail } from '../../feature-library/callback-and-voicemail/flex-hooks/components/TaskInfoPanel'

export default (flex: typeof Flex, manager: Flex.Manager) => {
  replaceViewForCallbackAndVoicemail(flex, manager);
}

