/*
 * Copyright 2024 RSC-Labs, https://rsoftcon.com/
 *
 * MIT License
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Tabs, Toaster } from "@medusajs/ui"
import { DocumentText } from "@medusajs/icons"
import { Box, Grid } from "@mui/material";
import { OrdersTab } from "../../../ui-components/tabs/orders-tab";
import { TemplatesTab } from "../../../ui-components/tabs/templates-tab/templates-tab";
import { SettingsTab } from "../../../ui-components/tabs/settings-tab";
import { FiraTab } from "../../../ui-components/tabs/fira-tab";
import { Csb5Tab } from "../../../ui-components/tabs/csb5-tab";
// import { ProTab } from "../../../ui-components/tabs/pro-tab";

const DocumentsPage = () => {
  // console.log(import.meta.env.VITE_MEDUSA_ADMIN_MEDUSA_DOCUMENTS_HIDE_PRO);
  return (
    <Tabs defaultValue='orders'>
      <Toaster position="top-right"/>
      <Tabs.List >
        <Tabs.Trigger value='orders'>Orders</Tabs.Trigger>
        <Tabs.Trigger value='fira'>FIRA</Tabs.Trigger>
        <Tabs.Trigger value='csb5'>CSB-V</Tabs.Trigger>
        <Tabs.Trigger value='templates'>Templates</Tabs.Trigger>
        <Tabs.Trigger value='settings'>Settings</Tabs.Trigger>
        {/* {import.meta.env.VITE_MEDUSA_ADMIN_MEDUSA_DOCUMENTS_HIDE_PRO === undefined && <Grid container justifyContent={'end'}>
            <Tabs.Trigger value='pro' style={ { color: 'purple' }}>Pro version</Tabs.Trigger>
        </Grid>} */}
      </Tabs.List>
      <Tabs.Content value='orders'>
        <Box height={20}></Box>
        <OrdersTab/>
      </Tabs.Content>
      <Tabs.Content value='fira'>
        <Box height={20}></Box>
        <FiraTab/>
      </Tabs.Content>
      <Tabs.Content value='csb5'>
        <Box height={20}></Box>
        <Csb5Tab/>
      </Tabs.Content>
      <Tabs.Content value='templates'>
        <Box height={20}></Box>
        <TemplatesTab/>
      </Tabs.Content>
      <Tabs.Content value='settings'>
        <Box height={20}></Box>
        <SettingsTab/>
      </Tabs.Content>
      {/* {import.meta.env.VITE_MEDUSA_ADMIN_MEDUSA_DOCUMENTS_HIDE_PRO === undefined && <Tabs.Content value='pro'>
        <Box height={20}></Box>
        <ProTab/>
      </Tabs.Content>} */}
    </Tabs>
  )
}

export const config = defineRouteConfig({
  label: "Documents",
  icon: DocumentText,
})

export default DocumentsPage