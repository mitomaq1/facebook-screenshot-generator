import html2canvas from 'html2canvas';

export const exportAsImage = async (
  elementId: string,
  filename: string = 'facebook-screenshot'
): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    alert('Element not found for export');
    return;
  }

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#f3f4f6',
      scale: 2,
      useCORS: true,
      logging: false,
      width: element.scrollWidth,
      height: element.scrollHeight,
    });

    const dataUrl = canvas.toDataURL('image/png', 1.0);
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error exporting image:', error);
    alert('Failed to export image. Please try again.');
  }
};

