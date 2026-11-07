/**
 * Standalone node runner to generate Spice_District_Presentation.pptx on disk
 */
import { createSpiceDistrictPresentation } from '../src/utils/pptxExport.js';

async function run() {
  console.log('Generating Spice_District_Presentation.pptx...');
  const pres = await createSpiceDistrictPresentation();
  await pres.writeFile({ fileName: 'Spice_District_Presentation.pptx' });
  console.log('Successfully created Spice_District_Presentation.pptx on disk!');
}

run().catch((err) => {
  console.error('Error generating presentation:', err);
  process.exit(1);
});
