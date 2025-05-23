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

import { Container } from "@medusajs/ui"
import { Grid } from "@mui/material";
import FiraTable from "../fira/fira-table";

export const FiraTab = () => {

  return (
    <Grid container spacing={2}  >
      <Grid item xs={12} md={12} xl={12}>
        <Container>
          <FiraTable/>
        </Container>
      </Grid>
    </Grid>
  )
}