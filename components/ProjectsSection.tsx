interface ProjectsSectionProps {
  isActive: boolean
}

export default function ProjectsSection({ isActive }: ProjectsSectionProps) {
  return (
    <section id="projects-section" className={isActive ? 'active' : 'inactive'}>
      <h3 id="text19">Personal Projects</h3>
      <p id="text12"><strong>2022</strong></p>

      <p id="text28">
        <span className="p">
          <a href="https://github.com/Rage997/NFT_Blender" target="_blank" rel="noopener noreferrer">
            <code>Blender 3D NFT generator</code>
          </a><br />
          I have been working, during my little spare time, on a Blender's python add-on to generate
          3D NFT art procedurally. The add-on gained some popularity inside Blender's forum and there
          are already multiple users
          using it, even if it is still in an early development stage and many features are
          lacking.
        </span>
      </p>

      <p id="text34">
        <span className="p">
          <a href="https://github.com/Rage997/VarModelCrypto" target="_blank" rel="noopener noreferrer">
            <code>A study on the crypto market using an Autoregressive Model</code>
          </a><br />
          I fitted an Autoregressive Model (VAR) on a subset of the crypto market.
          My study focused on cryptocurrencies casual relationships and their casual direction.
          Furthermore, I was interested in
          estimating the "big players"
          that dictate the directions of the market.
        </span>
      </p>

      <p id="text12"><strong>2021</strong></p>

      <p id="text18">
        <span className="p">
          <a href="https://github.com/Rage997/Spectral-Clustering-mesh-segmentation" target="_blank" rel="noopener noreferrer">
            <code>3D Spectral segmentation</code>
          </a><br />
          Implementation of the paper <em>"Rong Liu and Hao Zhang, "Segmentation of 3D meshes through
            spectral clustering"</em> in Blender.
          In short, it performs the clusterering of a mesh vertices depending on the geodesic distance
          between
          and concavity between faces. The algorithm, if provided with an appropiate number of
          clusters, is
          capable of clustering the important features of a mesh. In the picture the algorithm is
          applied on Suzanne (the Monkey)
          with a number of 3 clusters. Note how the two eyes and the body are in separated clusters.
        </span>
      </p>

      <p id="text18">
        <span className="p">
          <a href="https://github.com/Rage997/ImagesAsMesh" target="_blank" rel="noopener noreferrer">
            <code>Image as Mesh</code>
          </a><br />
          A Blender addon to import images as meshes. Inspired by the famous addon: ImagesAsPlanes.
          The addon will create a 3D object given an image. Results quality depend on the resolution
          of the image.
        </span>
      </p>

      <p id="text18">
        <span className="p">
          <a href="https://github.com/Rage997/ImageQuadApprox" target="_blank" rel="noopener noreferrer">
            <code>Quadtree image art</code>
          </a><br />
          Approximate images using quadtree i.e. by recursively subdividing the image into four
          quadrants if some conditions are met. In this case, the split is done whether the image and
          its mean colour differ in some tolerance. This is not an efficient way of compressing images
          but the visual result is pleasant to the eye.
        </span>
      </p>

      <p id="text12"><strong>2020</strong></p>
      <p id="text30">
        <span className="p">
          <a href="https://github.com/Rage997/Structured_Light_3DScanner" target="_blank" rel="noopener noreferrer">
            <code>Structured light 3D scanner</code>
          </a><br />
          Implementation of <i> Build Your Own 3D Scanner: Optical Triangulation for Beginners </i>
          presented in SIGGRAPH 2009 and SIGGRAPH Asia 2009 Courses (http://mesh.brown.edu/byo3d/).
        </span>
      </p>

      <p id="text12"><strong>2019</strong></p>
      <p id="text30">
        <span className="p">
          <a href="https://github.com/Rage997/aFrame-GeometryInsancing-Component" target="_blank" rel="noopener noreferrer">
            <code>Geometry Instancing</code>
          </a><br />
          Implementation of geometry instancing using A-Frame, three.js and webGL.
        </span>
      </p>
    </section>
  )
}