<?php

namespace Drupal\pdb_ng5\Plugin\Block;

use Drupal\pdb\Plugin\Block\PdbBlock;

/**
 * Exposes an Angular 5 component as a block.
 *
 * @Block(
 *   id = "ng5_component",
 *   admin_label = @Translation("Angular 5 component"),
 *   deriver = "\Drupal\pdb_ng5\Plugin\Derivative\Ng5BlockDeriver"
 * )
 */
class Ng5Block extends PdbBlock {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $info = $this->getComponentInfo();
    $machine_name = $info['machine_name'];

    $build = parent::build();
    $build['#allowed_tags'] = array($machine_name);
    $build['#markup'] = '<' . $machine_name . ' id="instance-id-' . $this->configuration['uuid'] . '"></' . $machine_name . '>';

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function attachFramework(array $component) {
    $attached = array();
    $attached['drupalSettings']['pdb']['ng5']['global_injectables'] = [];

    return $attached;
  }

  /**
   * {@inheritdoc}
   */
  public function attachSettings(array $component) {
    $attached = parent::attachSettings($component);

    $machine_name = $component['machine_name'];
    $uuid = $this->configuration['uuid'];

    $attached['drupalSettings']['pdb']['ng5']['components']['instance-id-' . $uuid] = [
      'uri' => $component['path'],
      'element' => $machine_name,
    ];
    // Check if ng_class_name was defined.
    if (!empty($component['ng_class_name'])) {
      // Add "ngClassName" value.
      $attached['drupalSettings']['pdb']['ng5']['components']['instance-id-' . $uuid] += [
        'ngClassName' => $component['ng_class_name'],
      ];
    }
    $attached['drupalSettings']['pdb']['ng5']['module_path'] = drupal_get_path('module', 'pdb_ng5');

    // If we need to extend systemConfig, grab our values.
    if (!empty($component['system_config'])) {
      $attached['drupalSettings']['pdb']['ng5']['system_config'] = $component['system_config'];
    }

    $config_settings = \Drupal::config('pdb_ng5.settings');
    if (isset($config_settings)) {
      $attached['drupalSettings']['pdb']['ng5']['development_mode'] = $config_settings->get('development_mode');
    }
    else {
      $attached['drupalSettings']['pdb']['ng5']['development_mode'] = TRUE;
    }

    return $attached;
  }

  /**
   * {@inheritdoc}
   */
  public function attachLibraries(array $component) {
    $parent_libraries = parent::attachLibraries($component);

    $framework_libraries = array(
      'pdb_ng5/pdb.ng5.config',
    );

    $libraries = array(
      'library' => array_merge($parent_libraries, $framework_libraries),
    );

    return $libraries;
  }

}
