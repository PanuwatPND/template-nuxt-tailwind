import * as auth from "@/service/auth.service";
import * as storage from "@/service/storage.service";

import * as education from "~/service/setting/system/education";
import * as prefix from "~/service/setting/system/prefix";

import * as salary from "@/service/setting/system/salary.service";
import * as position from "@/service/setting/system/position.service";
import * as signature from "@/service/setting/system/signature.service";
import * as punishment from "~/service/setting/system/punishment.service";
import * as setup from "~/service/setting/system/setup";
import * as address from "@/service/setting/system/address";
import * as contact from "~/service/setting/system/contact.service";
import * as bank from "@/service/setting/system/bank";
import * as relationship from "~/service/setting/system/relationship .service";
import * as information from "~/service/member/information";
import * as transaction from "~/service/member/transaction";

export default {
  auth,
  education,
  prefix,
  salary,
  position,
  signature,
  punishment,
  setup,
  address,
  contact,
  bank,
  relationship,
  information,
  storage,
  transaction,
};
