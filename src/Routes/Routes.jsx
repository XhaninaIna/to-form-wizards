import { Routes as AppRoutes, Route } from "react-router-dom";
import CvListPage from "../pages/cvlistpage/CvListPage";
import WizzardPage from "../pages/wizzardpage/WizzardPage";
import ResumePreviewPage from "../pages/resumepreviewpage/ResumePreviewPage";
import CvDetailsPage from "../pages/cvdetailspage/CvDetailsPage";
import EditCvPage from "../pages/editcv/EditCvPage";
const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<CvListPage />} />
      <Route path="/wizzard">
        <Route path="step-1" element={<WizzardPage step={1} />} />
        <Route path="step-2" element={<WizzardPage step={2} />} />
        <Route path="step-3" element={<WizzardPage step={3} />} />
      </Route>
      {/* Resume Preview */}
      <Route path="/resume-preview" element={<ResumePreviewPage />} />
      <Route path="/cv/:id" element={<CvDetailsPage />} />
      <Route path="/edit-cv" element={<EditCvPage />} />
    </AppRoutes>
  );
};
export default Routes;
