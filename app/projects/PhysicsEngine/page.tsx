import ProjectPage from "@/components/ProjectPage";

const ProjectPhysicsEngine = () => {
  return (
    <>
      <ProjectPage
        title="Physics Engine"
        description="A modular, impulse-based physics engine written in C++ with robust support for AABB, OBB, and Sphere collisions, rotational dynamics via quaternions, and friction-based collision resolution. Built for realism, educational use, and simulation precision."
        details={[
          {
            name: "C++",
            reason: "Core language used for performance, memory control, and physics computation.",
            badge: "https://img.shields.io/badge/C++-00599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
          },
          {
            name: "Rigid Body Dynamics",
            reason: "Implements Newtonian physics including forces, torque, integration, and rotational motion.",
            badge: "https://img.shields.io/badge/Rigid%20Body-Dynamics-green?style=for-the-badge",
          },
          {
            name: "Collision Detection",
            reason: "Includes AABB, OBB, and Sphere collision detection with SAT and impulse resolution.",
            badge: "https://img.shields.io/badge/Collision%20Detection-3D-yellow?style=for-the-badge",
          },
          {
            name: "Quaternion Math",
            reason: "Handles 3D rotations using quaternion multiplication and matrix conversion.",
            badge: "https://img.shields.io/badge/Quaternion-Rotation-purple?style=for-the-badge",
          },
        ]}
        screenshot="/images/physicsengine.png"
        codeSnippet={`bool ComputeAABBCollision(const AABB& A, const AABB& B, float& penetration, Vector3& normal) {
  if (!AABBvsAABB(A, B)) return false;
  float overlapX = std::min(A.max.x - B.min.x, B.max.x - A.min.x);
  float overlapY = std::min(A.max.y - B.min.y, B.max.y - A.min.y);
  float overlapZ = std::min(A.max.z - B.min.z, B.max.z - A.min.z);

  penetration = overlapX;
  normal = Vector3(1, 0, 0);
  if (overlapY < penetration) { penetration = overlapY; normal = Vector3(0, 1, 0); }
  if (overlapZ < penetration) { penetration = overlapZ; normal = Vector3(0, 0, 1); }

  Vector3 centerA = (A.min + A.max) * 0.5f;
  Vector3 centerB = (B.min + B.max) * 0.5f;
  if ((centerB - centerA).Dot(normal) < 0) normal = normal * -1.0f;
  return true;
}`}
        buttons={[
          {
            label: "GitHub",
            link: "https://github.com/kleascm/physics-engine",
            icon: "https://img.icons8.com/ios-glyphs/30/ffffff/github.png",
          },
        ]}
      />
    </>
  );
};

export default ProjectPhysicsEngine;
