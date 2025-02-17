import * as Flex from '@twilio/flex-ui';
import { FlexEvent } from "../../../../types/manager/FlexEvent";
import { initialize } from "../../index";
import { UIAttributes } from 'types/manager/ServiceConfiguration';
const { custom_data } = Flex.Manager.getInstance().serviceConfiguration.ui_attributes as UIAttributes;
const { enabled } = custom_data.features.activity_reservation_handler;

const pluginsLoadedHandler = (flexEvent: FlexEvent) => {
  if (!enabled) return;
  
  console.log(`Feature enabled: activity-reservation-handler`);
  initialize();
};

export default pluginsLoadedHandler;
